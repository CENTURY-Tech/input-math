declare module MathQuill {
  export function getInterface(version: number): API;

  export interface API {
    TextField(apiclasses: APIClasses | HTMLElement): EditableField;
    StaticMath(apiclasses: APIClasses | HTMLElement): EditableField;
    MathField(apiclasses: APIClasses | HTMLElement, config: FieldConfig): EditableField;
  }

  export interface EditableField {
    id: number;
    data: any;

    focus();
    blur();
    write(latex: string);
    cmd(cmd: string);
    select();
    clearSelection();
    moveToDirEnd(dir: any);
    moveToLeftEnd();
    moveToRightEnd();
    keystroke(keys: string);
    typedText(text: string);
    dropEmbedded(pageX: number, pageY: number, options: any);
    text();
    latex();
    html();
    reflow();
    config(config: FieldConfig);
    revert();
    el();
  }

  export interface FieldConfig {
    spaceBehavesLikeTab?: boolean;
    leftRightIntoCmdGoes?: string;
    restrictMismatchedBrackets?: boolean;
    sumStartsWithNEquals?: boolean;
    supSubsRequireOperand?: boolean;
    charsThatBreakOutOfSupSub?: string;
    autoSubscriptNumerals?: boolean;
    autoCommands?: string;
    autoOperatorNames?: string;
    substituteTextarea?: Function;
    handlers?: {
      edit?: Function;
      upOutOf?: Function;
      moveOutOf?: Function;
    }
  }

  export interface APIClasses {
    AbstractMathQuill;
    EditableField;
  }
}