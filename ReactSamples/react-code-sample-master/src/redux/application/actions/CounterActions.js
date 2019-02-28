
export const INC = 'INC';
export const DEC = 'DEC';
export const RESET = 'RESET';

export function inc() {  
  return {
    type: INC,
  };
}

export function dec() {
  return {
    type: DEC,
  };
}

export function reset() {
  return {
    type: RESET,
  };
}