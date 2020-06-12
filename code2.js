gdjs.EndScreenCode = {};
gdjs.EndScreenCode.GDNewObjectObjects1= [];
gdjs.EndScreenCode.GDNewObjectObjects2= [];
gdjs.EndScreenCode.GDTrophyObjects1= [];
gdjs.EndScreenCode.GDTrophyObjects2= [];
gdjs.EndScreenCode.GDResetButtonObjects1= [];
gdjs.EndScreenCode.GDResetButtonObjects2= [];

gdjs.EndScreenCode.conditionTrue_0 = {val:false};
gdjs.EndScreenCode.condition0IsTrue_0 = {val:false};
gdjs.EndScreenCode.condition1IsTrue_0 = {val:false};


gdjs.EndScreenCode.eventsList0x5b71c8 = function(runtimeScene) {

{


gdjs.EndScreenCode.condition0IsTrue_0.val = false;
{
gdjs.EndScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}if (gdjs.EndScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene", false);
}}

}


}; //End of gdjs.EndScreenCode.eventsList0x5b71c8


gdjs.EndScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.EndScreenCode.GDNewObjectObjects1.length = 0;
gdjs.EndScreenCode.GDNewObjectObjects2.length = 0;
gdjs.EndScreenCode.GDTrophyObjects1.length = 0;
gdjs.EndScreenCode.GDTrophyObjects2.length = 0;
gdjs.EndScreenCode.GDResetButtonObjects1.length = 0;
gdjs.EndScreenCode.GDResetButtonObjects2.length = 0;

gdjs.EndScreenCode.eventsList0x5b71c8(runtimeScene);
return;

}

gdjs['EndScreenCode'] = gdjs.EndScreenCode;
