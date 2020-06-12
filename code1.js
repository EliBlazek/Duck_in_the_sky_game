gdjs.WorldCode = {};
gdjs.WorldCode.GDPlayerObjects1= [];
gdjs.WorldCode.GDPlayerObjects2= [];
gdjs.WorldCode.GDPlatformObjects1= [];
gdjs.WorldCode.GDPlatformObjects2= [];
gdjs.WorldCode.GDBridgeObjects1= [];
gdjs.WorldCode.GDBridgeObjects2= [];
gdjs.WorldCode.GDBreadObjects1= [];
gdjs.WorldCode.GDBreadObjects2= [];
gdjs.WorldCode.GDUmbrellaObjects1= [];
gdjs.WorldCode.GDUmbrellaObjects2= [];
gdjs.WorldCode.GDBackgroundObjects1= [];
gdjs.WorldCode.GDBackgroundObjects2= [];
gdjs.WorldCode.GDCloudObjects1= [];
gdjs.WorldCode.GDCloudObjects2= [];
gdjs.WorldCode.GDGrassObjects1= [];
gdjs.WorldCode.GDGrassObjects2= [];
gdjs.WorldCode.GDScore_95txtObjects1= [];
gdjs.WorldCode.GDScore_95txtObjects2= [];
gdjs.WorldCode.GDCheckpointObjects1= [];
gdjs.WorldCode.GDCheckpointObjects2= [];
gdjs.WorldCode.GDSpikesObjects1= [];
gdjs.WorldCode.GDSpikesObjects2= [];
gdjs.WorldCode.GDDeath_95countObjects1= [];
gdjs.WorldCode.GDDeath_95countObjects2= [];
gdjs.WorldCode.GDBoxObjects1= [];
gdjs.WorldCode.GDBoxObjects2= [];
gdjs.WorldCode.GDVictory_95thingObjects1= [];
gdjs.WorldCode.GDVictory_95thingObjects2= [];
gdjs.WorldCode.GDFall_95detectorObjects1= [];
gdjs.WorldCode.GDFall_95detectorObjects2= [];

gdjs.WorldCode.conditionTrue_0 = {val:false};
gdjs.WorldCode.condition0IsTrue_0 = {val:false};
gdjs.WorldCode.condition1IsTrue_0 = {val:false};
gdjs.WorldCode.condition2IsTrue_0 = {val:false};


gdjs.WorldCode.mapOfGDgdjs_46WorldCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.WorldCode.GDPlayerObjects1});gdjs.WorldCode.mapOfGDgdjs_46WorldCode_46GDBreadObjects1Objects = Hashtable.newFrom({"Bread": gdjs.WorldCode.GDBreadObjects1});gdjs.WorldCode.mapOfGDgdjs_46WorldCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.WorldCode.GDPlayerObjects1});gdjs.WorldCode.mapOfGDgdjs_46WorldCode_46GDCheckpointObjects1Objects = Hashtable.newFrom({"Checkpoint": gdjs.WorldCode.GDCheckpointObjects1});gdjs.WorldCode.mapOfGDgdjs_46WorldCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.WorldCode.GDPlayerObjects1});gdjs.WorldCode.mapOfGDgdjs_46WorldCode_46GDSpikesObjects1Objects = Hashtable.newFrom({"Spikes": gdjs.WorldCode.GDSpikesObjects1});gdjs.WorldCode.mapOfGDgdjs_46WorldCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.WorldCode.GDPlayerObjects1});gdjs.WorldCode.mapOfGDgdjs_46WorldCode_46GDFall_9595detectorObjects1Objects = Hashtable.newFrom({"Fall_detector": gdjs.WorldCode.GDFall_95detectorObjects1});gdjs.WorldCode.mapOfGDgdjs_46WorldCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.WorldCode.GDPlayerObjects1});gdjs.WorldCode.mapOfGDgdjs_46WorldCode_46GDVictory_9595thingObjects1Objects = Hashtable.newFrom({"Victory_thing": gdjs.WorldCode.GDVictory_95thingObjects1});gdjs.WorldCode.eventsList0x5b71c8 = function(runtimeScene) {

{



}


{


gdjs.WorldCode.condition0IsTrue_0.val = false;
{
gdjs.WorldCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.WorldCode.condition0IsTrue_0.val) {
gdjs.WorldCode.GDFall_95detectorObjects1.createFrom(runtimeScene.getObjects("Fall_detector"));
{for(var i = 0, len = gdjs.WorldCode.GDFall_95detectorObjects1.length ;i < len;++i) {
    gdjs.WorldCode.GDFall_95detectorObjects1[i].hide();
}
}}

}


{


{
gdjs.WorldCode.GDScore_95txtObjects1.createFrom(runtimeScene.getObjects("Score_txt"));
{for(var i = 0, len = gdjs.WorldCode.GDScore_95txtObjects1.length ;i < len;++i) {
    gdjs.WorldCode.GDScore_95txtObjects1[i].setString("Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}
}}

}


{


{
gdjs.WorldCode.GDDeath_95countObjects1.createFrom(runtimeScene.getObjects("Death_count"));
{for(var i = 0, len = gdjs.WorldCode.GDDeath_95countObjects1.length ;i < len;++i) {
    gdjs.WorldCode.GDDeath_95countObjects1[i].setString("Deaths: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3))));
}
}}

}


{



}


{


{
gdjs.WorldCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.WorldCode.GDPlayerObjects1.length !== 0 ? gdjs.WorldCode.GDPlayerObjects1[0] : null), false, "", 0);
}}

}


{

gdjs.WorldCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.WorldCode.condition0IsTrue_0.val = false;
gdjs.WorldCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.WorldCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.WorldCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.WorldCode.condition0IsTrue_0.val = true;
        gdjs.WorldCode.GDPlayerObjects1[k] = gdjs.WorldCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.WorldCode.GDPlayerObjects1.length = k;}if ( gdjs.WorldCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.WorldCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.WorldCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.WorldCode.condition1IsTrue_0.val = true;
        gdjs.WorldCode.GDPlayerObjects1[k] = gdjs.WorldCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.WorldCode.GDPlayerObjects1.length = k;}}
if (gdjs.WorldCode.condition1IsTrue_0.val) {
/* Reuse gdjs.WorldCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.WorldCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.WorldCode.GDPlayerObjects1[i].setAnimationName("Walk");
}
}}

}


{

gdjs.WorldCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.WorldCode.condition0IsTrue_0.val = false;
gdjs.WorldCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.WorldCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.WorldCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.WorldCode.condition0IsTrue_0.val = true;
        gdjs.WorldCode.GDPlayerObjects1[k] = gdjs.WorldCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.WorldCode.GDPlayerObjects1.length = k;}if ( gdjs.WorldCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.WorldCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.WorldCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.WorldCode.condition1IsTrue_0.val = true;
        gdjs.WorldCode.GDPlayerObjects1[k] = gdjs.WorldCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.WorldCode.GDPlayerObjects1.length = k;}}
if (gdjs.WorldCode.condition1IsTrue_0.val) {
/* Reuse gdjs.WorldCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.WorldCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.WorldCode.GDPlayerObjects1[i].setAnimationName("Idle");
}
}}

}


{

gdjs.WorldCode.GDBreadObjects1.createFrom(runtimeScene.getObjects("Bread"));
gdjs.WorldCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.WorldCode.condition0IsTrue_0.val = false;
{
gdjs.WorldCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.WorldCode.mapOfGDgdjs_46WorldCode_46GDPlayerObjects1Objects, gdjs.WorldCode.mapOfGDgdjs_46WorldCode_46GDBreadObjects1Objects, false, runtimeScene, false);
}if (gdjs.WorldCode.condition0IsTrue_0.val) {
/* Reuse gdjs.WorldCode.GDBreadObjects1 */
{for(var i = 0, len = gdjs.WorldCode.GDBreadObjects1.length ;i < len;++i) {
    gdjs.WorldCode.GDBreadObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Coin_pickup.wav", false, 100, 1);
}{runtimeScene.getVariables().getFromIndex(0).add(100);
}}

}


{


gdjs.WorldCode.condition0IsTrue_0.val = false;
{
gdjs.WorldCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.WorldCode.condition0IsTrue_0.val) {
gdjs.WorldCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.WorldCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.WorldCode.GDPlayerObjects1[i].setAngle(180);
}
}{for(var i = 0, len = gdjs.WorldCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.WorldCode.GDPlayerObjects1[i].flipY(true);
}
}}

}


{


gdjs.WorldCode.condition0IsTrue_0.val = false;
{
gdjs.WorldCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.WorldCode.condition0IsTrue_0.val) {
gdjs.WorldCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.WorldCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.WorldCode.GDPlayerObjects1[i].setAngle(0);
}
}{for(var i = 0, len = gdjs.WorldCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.WorldCode.GDPlayerObjects1[i].flipY(false);
}
}}

}


{


gdjs.WorldCode.condition0IsTrue_0.val = false;
{
gdjs.WorldCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "q");
}if (gdjs.WorldCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Quack_final.wav", false, 100, 1);
}}

}


{



}


{

gdjs.WorldCode.GDCheckpointObjects1.createFrom(runtimeScene.getObjects("Checkpoint"));
gdjs.WorldCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.WorldCode.condition0IsTrue_0.val = false;
{
gdjs.WorldCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.WorldCode.mapOfGDgdjs_46WorldCode_46GDPlayerObjects1Objects, gdjs.WorldCode.mapOfGDgdjs_46WorldCode_46GDCheckpointObjects1Objects, false, runtimeScene, false);
}if (gdjs.WorldCode.condition0IsTrue_0.val) {
/* Reuse gdjs.WorldCode.GDCheckpointObjects1 */
{runtimeScene.getVariables().getFromIndex(1).setNumber((( gdjs.WorldCode.GDCheckpointObjects1.length === 0 ) ? 0 :gdjs.WorldCode.GDCheckpointObjects1[0].getPointX("")));
}{runtimeScene.getVariables().getFromIndex(2).setNumber((( gdjs.WorldCode.GDCheckpointObjects1.length === 0 ) ? 0 :gdjs.WorldCode.GDCheckpointObjects1[0].getPointY("")));
}{for(var i = 0, len = gdjs.WorldCode.GDCheckpointObjects1.length ;i < len;++i) {
    gdjs.WorldCode.GDCheckpointObjects1[i].setAnimationName("Trigger");
}
}}

}


{

gdjs.WorldCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.WorldCode.GDSpikesObjects1.createFrom(runtimeScene.getObjects("Spikes"));

gdjs.WorldCode.condition0IsTrue_0.val = false;
{
gdjs.WorldCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.WorldCode.mapOfGDgdjs_46WorldCode_46GDPlayerObjects1Objects, gdjs.WorldCode.mapOfGDgdjs_46WorldCode_46GDSpikesObjects1Objects, false, runtimeScene, false);
}if (gdjs.WorldCode.condition0IsTrue_0.val) {
/* Reuse gdjs.WorldCode.GDPlayerObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "Crab_ow_final.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.WorldCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.WorldCode.GDPlayerObjects1[i].setPosition(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)),gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)));
}
}{runtimeScene.getVariables().getFromIndex(3).add(1);
}}

}


{

gdjs.WorldCode.GDFall_95detectorObjects1.createFrom(runtimeScene.getObjects("Fall_detector"));
gdjs.WorldCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.WorldCode.condition0IsTrue_0.val = false;
{
gdjs.WorldCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.WorldCode.mapOfGDgdjs_46WorldCode_46GDPlayerObjects1Objects, gdjs.WorldCode.mapOfGDgdjs_46WorldCode_46GDFall_9595detectorObjects1Objects, false, runtimeScene, false);
}if (gdjs.WorldCode.condition0IsTrue_0.val) {
/* Reuse gdjs.WorldCode.GDPlayerObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "Crab_ow_final.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.WorldCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.WorldCode.GDPlayerObjects1[i].setPosition(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)),gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)));
}
}{runtimeScene.getVariables().getFromIndex(3).add(1);
}}

}


{

gdjs.WorldCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.WorldCode.GDVictory_95thingObjects1.createFrom(runtimeScene.getObjects("Victory_thing"));

gdjs.WorldCode.condition0IsTrue_0.val = false;
{
gdjs.WorldCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.WorldCode.mapOfGDgdjs_46WorldCode_46GDPlayerObjects1Objects, gdjs.WorldCode.mapOfGDgdjs_46WorldCode_46GDVictory_9595thingObjects1Objects, false, runtimeScene, false);
}if (gdjs.WorldCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene2", false);
}}

}


}; //End of gdjs.WorldCode.eventsList0x5b71c8


gdjs.WorldCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.WorldCode.GDPlayerObjects1.length = 0;
gdjs.WorldCode.GDPlayerObjects2.length = 0;
gdjs.WorldCode.GDPlatformObjects1.length = 0;
gdjs.WorldCode.GDPlatformObjects2.length = 0;
gdjs.WorldCode.GDBridgeObjects1.length = 0;
gdjs.WorldCode.GDBridgeObjects2.length = 0;
gdjs.WorldCode.GDBreadObjects1.length = 0;
gdjs.WorldCode.GDBreadObjects2.length = 0;
gdjs.WorldCode.GDUmbrellaObjects1.length = 0;
gdjs.WorldCode.GDUmbrellaObjects2.length = 0;
gdjs.WorldCode.GDBackgroundObjects1.length = 0;
gdjs.WorldCode.GDBackgroundObjects2.length = 0;
gdjs.WorldCode.GDCloudObjects1.length = 0;
gdjs.WorldCode.GDCloudObjects2.length = 0;
gdjs.WorldCode.GDGrassObjects1.length = 0;
gdjs.WorldCode.GDGrassObjects2.length = 0;
gdjs.WorldCode.GDScore_95txtObjects1.length = 0;
gdjs.WorldCode.GDScore_95txtObjects2.length = 0;
gdjs.WorldCode.GDCheckpointObjects1.length = 0;
gdjs.WorldCode.GDCheckpointObjects2.length = 0;
gdjs.WorldCode.GDSpikesObjects1.length = 0;
gdjs.WorldCode.GDSpikesObjects2.length = 0;
gdjs.WorldCode.GDDeath_95countObjects1.length = 0;
gdjs.WorldCode.GDDeath_95countObjects2.length = 0;
gdjs.WorldCode.GDBoxObjects1.length = 0;
gdjs.WorldCode.GDBoxObjects2.length = 0;
gdjs.WorldCode.GDVictory_95thingObjects1.length = 0;
gdjs.WorldCode.GDVictory_95thingObjects2.length = 0;
gdjs.WorldCode.GDFall_95detectorObjects1.length = 0;
gdjs.WorldCode.GDFall_95detectorObjects2.length = 0;

gdjs.WorldCode.eventsList0x5b71c8(runtimeScene);
return;

}

gdjs['WorldCode'] = gdjs.WorldCode;
