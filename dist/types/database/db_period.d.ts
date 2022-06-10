import { ID } from 'interactive-elements';
import { ShortDate } from '..';
/**
 * A model for storing a period to the database.
 */
export interface DbPeriodModel {
    id: ID;
    locked: boolean;
    start_date: ShortDate;
    end_date: ShortDate;
}
