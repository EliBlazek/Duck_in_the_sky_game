gdjs.StartCode = {};
gdjs.StartCode.GDTitleObjects1= [];
gdjs.StartCode.GDTitleObjects2= [];
gdjs.StartCode.GDNewObjectObjects1= [];
gdjs.StartCode.GDNewObjectObjects2= [];
gdjs.StartCode.GDNewObject2Objects1= [];
gdjs.StartCode.GDNewObject2Objects2= [];
gdjs.StartCode.GDNewObject3Objects1= [];
gdjs.StartCode.GDNewObject3Objects2= [];
gdjs.StartCode.GDNewObject4Objects1= [];
gdjs.StartCode.GDNewObject4Objects2= [];
gdjs.StartCode.GDTrophyObjects1= [];
gdjs.StartCode.GDTrophyObjects2= [];
gdjs.StartCode.GDNewObject5Objects1= [];
gdjs.StartCode.GDNewObject5Objects2= [];
gdjs.StartCode.GDNewObject6Objects1= [];
gdjs.StartCode.GDNewObject6Objects2= [];
gdjs.StartCode.GDArrowLObjects1= [];
gdjs.StartCode.GDArrowLObjects2= [];
gdjs.StartCode.GDArrowRObjects1= [];
gdjs.StartCode.GDArrowRObjects2= [];

gdjs.StartCode.conditionTrue_0 = {val:false};
gdjs.StartCode.condition0IsTrue_0 = {val:false};
gdjs.StartCode.condition1IsTrue_0 = {val:false};


gdjs.StartCode.eventsList0x5b71c8 = function(runtimeScene) {

{


gdjs.StartCode.condition0IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}if (gdjs.StartCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "World", false);
}}

}


}; //End of gdjs.StartCode.eventsList0x5b71c8


gdjs.StartCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StartCode.GDTitleObjects1.length = 0;
gdjs.StartCode.GDTitleObjects2.length = 0;
gdjs.StartCode.GDNewObjectObjects1.length = 0;
gdjs.StartCode.GDNewObjectObjects2.length = 0;
gdjs.StartCode.GDNewObject2Objects1.length = 0;
gdjs.StartCode.GDNewObject2Objects2.length = 0;
gdjs.StartCode.GDNewObject3Objects1.length = 0;
gdjs.StartCode.GDNewObject3Objects2.length = 0;
gdjs.StartCode.GDNewObject4Objects1.length = 0;
gdjs.StartCode.GDNewObject4Objects2.length = 0;
gdjs.StartCode.GDTrophyObjects1.length = 0;
gdjs.StartCode.GDTrophyObjects2.length = 0;
gdjs.StartCode.GDNewObject5Objects1.length = 0;
gdjs.StartCode.GDNewObject5Objects2.length = 0;
gdjs.StartCode.GDNewObject6Objects1.length = 0;
gdjs.StartCode.GDNewObject6Objects2.length = 0;
gdjs.StartCode.GDArrowLObjects1.length = 0;
gdjs.StartCode.GDArrowLObjects2.length = 0;
gdjs.StartCode.GDArrowRObjects1.length = 0;
gdjs.StartCode.GDArrowRObjects2.length = 0;

gdjs.StartCode.eventsList0x5b71c8(runtimeScene);
return;

}

gdjs['StartCode'] = gdjs.StartCode;
