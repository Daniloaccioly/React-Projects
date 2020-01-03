/*
 * action types
 */

export const CHANGECOLOR = 'CHANGECOLOR';
export const GETWEIGHT = 'GETWEIGHT';

/*
 * action creators
 */

export function ChangeColor() {
  return { 
    type: CHANGECOLOR, 
    text }
}

export function GetWeight() {
  return { 
    type: GETWEIGHT,
    text }
}