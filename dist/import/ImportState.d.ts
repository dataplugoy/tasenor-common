import { ImportSegment, SegmentId, TextFileLine } from "./TextFileLine";
/**
 * Initial state of the text file import.
 */
export type ImportStateText<StageType> = {
    stage: StageType;
    files: {
        [text: string]: {
            lines: TextFileLine[];
        };
    };
    segments?: Record<SegmentId, ImportSegment>;
    result?: Record<SegmentId, unknown>;
    output?: Record<string, unknown>;
};
/**
 * Union of all import states.
 */
export type ImportState = ImportStateText<'initial'> | ImportStateText<'segmented'> | ImportStateText<'classified'> | ImportStateText<'analyzed'> | ImportStateText<'executed'>;
export declare function isImportState(obj: unknown): obj is ImportState;
