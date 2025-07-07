
export interface ApiResponse<T> {
  isSuccessful: boolean;
  isError: boolean;
  errorMessage: string;
  okMessage: string;
  result: T;
  messages?: string[];
}


