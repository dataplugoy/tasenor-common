import { ImportAction } from "../import";
import { TasenorElement } from "./elements";
/**
 * Definition of the how the direction plays out in interactive process.
 */
export declare type DirectionsType = 'action' | 'ui' | 'complete';
/**
 * Definition of direction data.
 */
export interface DirectionsData {
    type: DirectionsType;
    element?: TasenorElement;
    action?: ImportAction;
}
/**
 * Data describing possible directions forward from the given interactive process state.
 */
export declare class Directions {
    type: DirectionsType;
    element?: TasenorElement;
    action?: ImportAction;
    constructor(obj: DirectionsData);
    /**
     * Construct JSON data of the member fields that has been set.
     * @returns
     */
    toJSON(): DirectionsData;
    /**
     * Check if the direction can be determined without user intervention.
     */
    isImmediate(): boolean;
    /**
     * Check if there are no directions forward.
     */
    isComplete(): boolean;
}
