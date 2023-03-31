import { SegmentId } from './TextFileLine';
/**
 * Action for updating process configuration.
 */
export interface ImportOpAction {
    op: 'segmentation' | 'classification' | 'analysis' | 'execution';
}
export declare function isImportOpAction(obj: unknown): obj is ImportOpAction;
/**
 * Actions for changing the import phases.
 */
export interface ImportConfigureAction {
    configure: Record<string, unknown>;
}
export declare function isImportConfigureAction(obj: unknown): obj is ImportConfigureAction;
/**
 * Actions for responding to questions.
 */
export interface ImportAnswerAction {
    answer: Record<SegmentId, Record<string, unknown>>;
}
export declare function isImportAnswerAction(obj: unknown): obj is ImportAnswerAction;
/**
 * Retry processing (after some code changes).
 */
export type ImportRetryAction = {
    retry: true;
};
export declare function isImportRetryAction(obj: unknown): obj is ImportRetryAction;
/**
 * Rollback process.
 */
export type ImportRollbackAction = {
    rollback: true;
};
export declare function isImportRollbackAction(obj: unknown): obj is ImportRollbackAction;
/**
 * Import step as an action.
 */
export type ImportAction = ImportOpAction | ImportConfigureAction | ImportAnswerAction | ImportRetryAction | ImportRollbackAction;
export declare function isImportAction(obj: unknown): obj is ImportAction;
