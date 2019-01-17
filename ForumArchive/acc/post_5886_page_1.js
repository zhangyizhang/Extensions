[{"Owner":"demonixis","Date":"2014-04-23T15:39:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi there_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_ve an issue on Mac OSX with lighting and shadows. I_t_m using four lights on my scene and a shadows generator. When I pass the flag receiveShadow _eq_ true on my ground_co_ I_t_ve the shadow applied on it but no lighting. If I remove receiveShadows it_t_s works (but I don_t_t have shadows visible on the ground)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_this is my test code _dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_div_gt__lt_span_gt__t_use strict_t__lt_/span_gt__lt_span_gt__sm__lt_/span_gt__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_window.onload _eq_ function () {    var canvas _eq_ document.getElementById(_qt_renderCanvas_qt_)_sm_    var engine _eq_ new BABYLON.Engine(canvas_co_ true)_sm_    var scene _eq_ new BABYLON.Scene(engine)_sm_        // CAMERA    var camera _eq_ new BABYLON.ArcRotateCamera(_qt_ArcRotateCamera_qt__co_ 1_co_ 0.8_co_ 10_co_ new BABYLON.Vector3(15_co_ 1_co_ 15)_co_ scene)_sm_    camera.minZ _eq_ 0.1_sm_    camera.maxZ _eq_ 5000000_sm_    scene.activeCamera.attachControl(canvas)_sm_        // LIGHTS    var light _eq_ new BABYLON.DirectionalLight(_qt_dir01_qt__co_ new BABYLON.Vector3(-1_co_ -2_co_ -1)_co_ scene)_sm_    light.position _eq_ new BABYLON.Vector3(20_co_ 40_co_ 20)_sm_    light.diffuse _eq_ new BABYLON.Color3(1_co_ 1_co_ 1)_sm_    light.specular _eq_ new BABYLON.Color3(0.6_co_ 0.6_co_ 0.6)_sm_    light.intensity _eq_ 0.6_sm_        var dirLight2 _eq_ new BABYLON.DirectionalLight(_qt_Dir1_qt__co_ new BABYLON.Vector3(0_co_ 1_co_ 0)_co_ scene)_sm_    dirLight2.specular _eq_ new BABYLON.Color3(0.5_co_ 0.5_co_ 0.5)_sm_    dirLight2.diffuse _eq_ new BABYLON.Color3(1._co_1._co_ 1.)_sm_    dirLight2.intensity _eq_ 0.5_sm_    dirLight2.position _eq_ new BABYLON.Vector3(0_co_10_co_0)_sm_        var hemiLight _eq_ new BABYLON.HemisphericLight(_qt_Hemi0_qt__co_ new BABYLON.Vector3(0_co_ 1_co_ 0)_co_ scene)_sm_    hemiLight.diffuse _eq_ new BABYLON.Color3(0.8_co_ 0.8_co_ 0.8)_sm_    hemiLight.specular _eq_ new BABYLON.Color3(0.1_co_ 0.1_co_ 0.1)_sm_    hemiLight.groundColor _eq_ new BABYLON.Color3(1_co_ 0_co_ 0)_sm_    hemiLight.intensity _eq_ 1._sm_        var pointLight _eq_ new BABYLON.PointLight(_qt_Point0_qt__co_ new BABYLON.Vector3(0_co_ 0_co_ 0)_co_ scene)_sm_    pointLight.diffuse _eq_ new BABYLON.Color3(0.6_co_ 0.6_co_ 0.6)_sm_    pointLight.specular _eq_ new BABYLON.Color3(0.5_co_ 0.5_co_ 0.5 )_sm_    pointLight.intensity _eq_ 0.3_sm_        // SHADOWS    var shadowGenerator _eq_ new BABYLON.ShadowGenerator(1024_co_ light)_sm_    shadowGenerator.useVarianceShadowMap _eq_ false_sm_        // OBJECTS    var ground _eq_ BABYLON.Mesh.CreateBox(_qt_box_qt__co_ 5_co_ scene)_sm_    ground.position _eq_ new BABYLON.Vector3(10_co_ 0_co_ 10)_sm_    ground.material _eq_ new BABYLON.StandardMaterial(_qt_mat_qt__co_ scene)_sm_    ground.material.ambientColor _eq_ new BABYLON.Color3(0_co_ 0_co_ 0)_sm_    ground.material.diffuseColor _eq_ new BABYLON.Color3(1_co_ 1_co_ 1)_sm_    ground.material.specularColor _eq_ new BABYLON.Color3(0.01_co_ 0.01_co_ 0.01)_sm_    ground.scaling _eq_ new BABYLON.Vector3(10_co_ 0.1_co_ 10)_sm_    ground.material.diffuseTexture _eq_ new BABYLON.Texture(_qt_images/ground.png_qt__co_ scene)_sm_    ground.receiveShadows _eq_ true_sm_        var boxMaterial _eq_ new BABYLON.StandardMaterial(_qt_mat2_qt__co_ scene)_sm_    boxMaterial.diffuseTexture _eq_ new BABYLON.Texture(_qt_images/box.png_qt__co_ scene)_sm_    var box _eq_ null_sm_        for (var i _eq_ 0_sm_ i &lt_sm_ 15_sm_ i++) {        box _eq_ BABYLON.Mesh.CreateBox(_qt_box_qt_ + i_co_ 1_co_ scene)_sm_        box.position _eq_ new BABYLON.Vector3(Math.random() * 25_co_ 0.75_co_ Math.random() * 25)_sm_        box.material _eq_ boxMaterial_sm_        shadowGenerator.getShadowMap().renderList.push(box)_sm_    }        // MAIN    engine.runRenderLoop(function() {        scene.render()_sm_    })_sm_}_sm__lt_/pre_gt__lt_p_gt_See my gist _lt_a href_eq__qt_https_dd_//gist.github.com/demonixis/11219632_qt_ rel_eq__qt_external nofollow_qt__gt_here_lt_/a_gt_._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_04_2014/post-407-0-31220100-1398266999.png_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_04_2014/post-407-0-31220100-1398266999.png_qt_ data-fileid_eq__qt_1471_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-407-0-31220100-1398266999.png_qt__gt__lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_On Windows and Linux the scene illumination is higher._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_04_2014/post-407-0-59044400-1398266999.png_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_04_2014/post-407-0-59044400-1398266999.png_qt_ data-fileid_eq__qt_1472_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-407-0-59044400-1398266999.png_qt__gt__lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_On Windows and Linux the bottom of the ground is red _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_&lt_sm_fileStore.core_Emoticons&gt_sm_/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_04_2014/post-407-0-14515500-1398267000.png_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_04_2014/post-407-0-14515500-1398267000_thumb.png_qt_ data-fileid_eq__qt_1473_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-407-0-14515500-1398267000_thumb.png_qt__gt__lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If I disable receiveShadow on the ground I_t_ve this result._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Do you have an idea to fix that ? How can I help you to find where is the problem ? If I use an intensity of 2.0 on the directional light_co_ it_t_s _qt_partially_qt_ work_co_ but it_t_s crap.._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks for your answers !_lt_/p_gt__lt_p_gt_Yann._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-04-23T16:33:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Do you use Safari or Chrome?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"demonixis","Date":"2014-04-24T07:07:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_We have this problem with all browsers in three differents Mac. One with an Intel HD3000_co_ another with Intel HD4000 and finally an old GeForce 9400. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If I set the directional light_t_s intensity to 2.5 the scene is almost well illuminated._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"demonixis","Date":"2014-04-24T09:15:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I made new tests on Windows 8.1u1_co_ Mac OSX 10.9.2_co_ Android 4.4.2 and Windows Phone 8.1._lt_br_gt_ _lt_br_gt_This problem is present on Windows Phone too but it_t_s worse_co_ the hemispherical light doesn_t_t work._lt_br_gt_ _lt_br_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_04_2014/post-407-0-33403700-1398330511.jpg_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_04_2014/post-407-0-33403700-1398330511_thumb.jpg_qt_ data-fileid_eq__qt_1477_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-407-0-33403700-1398330511_thumb.jpg_qt__gt__lt_/a_gt__lt_br_gt_ _lt_br_gt_Chrome stable on Android_co_ all is good_lt_br_gt_ _lt_br_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_04_2014/post-407-0-85960400-1398330511.jpg_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_04_2014/post-407-0-85960400-1398330511_thumb.jpg_qt_ data-fileid_eq__qt_1478_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-407-0-85960400-1398330511_thumb.jpg_qt__gt__lt_/a_gt__lt_br_gt_ _lt_br_gt_Chrome dev on Windows 8.1u1_co_ all is good_lt_br_gt_ _lt_br_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_04_2014/post-407-0-53014100-1398330510.jpg_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_04_2014/post-407-0-53014100-1398330510_thumb.jpg_qt_ data-fileid_eq__qt_1476_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-407-0-53014100-1398330510_thumb.jpg_qt__gt__lt_/a_gt__lt_br_gt_ _lt_br_gt_Chrome dev on Mac OSX (Firefox and Safari has the same problem). The ground_t_s bottom is not highlighted_co_ it_t_s dark._lt_br_gt_ _lt_br_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_04_2014/post-407-0-40240600-1398330512.jpg_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_04_2014/post-407-0-40240600-1398330512_thumb.jpg_qt_ data-fileid_eq__qt_1479_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-407-0-40240600-1398330512_thumb.jpg_qt__gt__lt_/a_gt__lt_br_gt_ _lt_br_gt_IE11 on Windows Phone 8.1. The ground_t_s bottom is not highlighted and boxes aren_t_t impacted by the hemispherical light._lt_br_gt_ _lt_br_gt_I_t_m trying to debug default fragment shader and I know that it_t_s not a shadow issue. The method computeLighting seems to fail on Mac_co_ I don_t_t know why. Debugging shaders is pretty hard_co_ we can_t_t use console.log in it _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ alt_eq__qt__dd_P_qt_ srcset_eq__qt_&lt_sm_fileStore.core_Emoticons&gt_sm_/emoticons/tongue@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I uploaded my sandbox project for all tests_co_ you can download it _lt_a href_eq__qt_https_dd_//onedrive.live.com/redir?resid_eq_E5C2145BFABF8CB7!9776&amp_sm_authkey_eq_!AHaHKbtbX5agRfE&amp_sm_ithint_eq_file%2C.zip_qt_ rel_eq__qt_external nofollow_qt__gt_here_lt_/a_gt_ or just get the source file _lt_a href_eq__qt_https_dd_//gist.github.com/demonixis/11219632_qt_ rel_eq__qt_external nofollow_qt__gt_here_lt_/a_gt_._lt_br_gt_ _lt_br_gt_PS_dd_ Do I need to resize images before uploading ? I don_t_t know what is the correct bbcode to adapt images size._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-04-24T19:10:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_It is hard to debug without a Mac _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_I_t_ll try on wp8.1_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"demonixis","Date":"2014-04-25T07:18:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yes i know.. How can I help you ? Do you have any clues about this issue ?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I made some tests on default.fragment.fx and I know that it_t_s not a shadow issue. When I turn the emissiveColor to 0.4 the result is better (it_t_s not a fix_co_ it_t_s a hack _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_You can disable the 2nd directional and the point light in my sample_co_ with just a directional we must have a scene with a green ground_co_ boxes and shadows. The ground_t_s bottom must be black. If you activate the hemisphericalLight_co_ some faces of cubes must be highlited in red and the ground_t_s bottom too. Even with an emissive color superior to 0.0 the ground_t_s bottom is black_co_ that_t_s not good (Mac and WP8.1)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_m not a pro with shaders (I liked your last blog post about it) but after a long debugging session_co_ I think that there is a problem in computeLighting method_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_div_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_vec3 lightVectorW_sm_if (lightData.w _eq__eq_ 0.){    lightVectorW _eq_ normalize(lightData.xyz - vPositionW)_sm_}else{    lightVectorW _eq_ normalize(-lightData.xyz)_sm_}_lt_/pre_gt__lt_/div_gt__lt_div_gt_LightVectorW is wrong for the ground_t_s bottom. So my question is_dd_ is it an issue with shader_co_ or in JS code when we set uniforms ? Maybe a bad computation is made in the JS code ? _lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"come","Date":"2014-04-25T13:15:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_On osx_co_ we detected the origin of the problem._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_In Babylon.Engine.js (method createShaderProgram)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_this._gl.getProgramInfoLog(shaderProgram)_sm__lt_/p_gt__lt_p_gt__eq_&gt_sm_ throws and error (a warning in fact)_lt_/p_gt__lt_div_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var error _eq_ this._gl.getProgramInfoLog(shaderProgram)_sm_if (error) {   throw new Error(error)_sm_}_lt_/pre_gt__lt_p_gt_Replace it with that _dd__lt_/p_gt__lt_div_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var linked _eq_ this._gl.linkProgram(shaderProgram)_sm_if (!linked) {    var error _eq_ this._gl.getProgramInfoLog(shaderProgram)_sm_    if (error) {       throw new Error(error)_sm_    }}_lt_/pre_gt__lt_/div_gt__lt_/div_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_the consequence in Babylon.Effect.js_dd_ _lt_/p_gt__lt_p_gt_the method _qt__prepareEffect_qt_ was throwed to the _qt_catch_qt_ part of the try/catch which reduces  _qt_defines_qt_ removing every optional parts of it_lt_/p_gt__lt_p_gt_causing the bug on mac os_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_NOTE_dd_ the bug still happen in Windows Phone according to demonixis_t_tests_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-04-25T15:56:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_on wp8.1 it may be related to shader complexity_lt_/p_gt__lt_p_gt_could you try with just one light and nothing else_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_ll fix the bug you found in the next release _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]