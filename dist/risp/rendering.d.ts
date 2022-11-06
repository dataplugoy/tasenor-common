import { TasenorElement } from './elements';
import { TasenorSetup } from './setup';
import { TriggerValues } from './triggers';
/**
 * A parameter collection used when rendering element.
 *
 * @property element Actual top level element to render.
 * @property values A set of values to edit associated with the rendering process.
 * @property setup Global configuration for the rendering system.
 */
export declare type RenderingProps<ElementType = TasenorElement> = {
    element: ElementType;
    values: TriggerValues;
    setup: TasenorSetup;
};
