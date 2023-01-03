import { ComponentType } from "react";
type ClipStageProps = {
    onCutDone: (size: any, rotation: number) => unknown;
};
declare const ClipStage: ComponentType<ClipStageProps>;
export default ClipStage;
