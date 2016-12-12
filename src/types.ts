export type CodeInspectionResultType = 'problem_type_error' | 'problem_type_warning' | 'problem_type_meta';

export interface CodeInspectionPosition {
  line: number;
  ch: number;
}

export interface CodeInspectionResult {
  type: CodeInspectionResultType;
  message: string;
  pos: CodeInspectionPosition;
}

export interface CodeInspectionReport {
  errors: CodeInspectionResult[];
}

export interface GutterOptions {
  error: boolean;
  warning: boolean;
  meta: boolean;
}
