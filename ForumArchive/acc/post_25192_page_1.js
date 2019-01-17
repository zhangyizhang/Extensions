[{"Owner":"svatopluk","Date":"2016-09-14T20:52:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_ I have exported a model from blender for babylon.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m using this code to position the mesh_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBABYLON.SceneLoader.ImportMesh(_qt_tree leaves leaves1_qt__co_ _qt_models/_qt__co_ _qt_tree.babylon_qt__co_ scene_co_ function (ms) { ms[0].position _eq_ BABYLON.Vector3.Zero()_sm__lt_br /_gt_\n\t})_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe problem is that the mesh is imported but is not visible. I_t_m a basic user in blender and I_t_m not sure if I have correctly made a model. I will attach log file from export and .babylon file\n_lt_/p_gt_\n\n_lt_p_gt__lt_a class_eq__qt_ipsAttachLink_qt_ href_eq__qt_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_9466_qt__gt_tree.babylon_lt_/a_gt__lt_/p_gt_\n_lt_p_gt__lt_a class_eq__qt_ipsAttachLink_qt_ href_eq__qt_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_9467_qt__gt_tree.log_lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"royibernthal","Date":"2016-09-14T21:23:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt_t_d help a lot if you could reproduce the issue on the playground and post the link here.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWith that said_co_ I didn_t_t take a look at your exported model_co_ but here are some thoughts_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAn exported model possibly contains more than one mesh_co_ so setting the position of just the first one can often not result in a visible change.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn your blender file does your model start at (0_co_ 0) or did you position it differently?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAre any errors thrown in the console?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2016-09-15T01:55:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/22855-svatopluk/?do_eq_hovercard_qt_ data-mentionid_eq__qt_22855_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/22855-svatopluk/_qt_ rel_eq__qt__qt__gt_@svatopluk_lt_/a_gt_ _dd_ welome to the forum _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tCan you post your .blend file ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere seems to be a camera and a light in your exported .babylon file as well as 3 meshes_co_ but you are using _qt__lt_em_gt_BABYLON.SceneLoader.ImportMesh_lt_/em_gt__qt_ to import just one mesh. Do you have an alternative camera and lights in your loading script?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tcheers_co_ gryff _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Steffen","Date":"2016-09-15T07:15:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_span_gt__lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/22855-svatopluk/?do_eq_hovercard_qt_ data-mentionid_eq__qt_22855_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/22855-svatopluk/_qt_ rel_eq__qt__qt__gt_@svatopluk_lt_/a_gt__lt_/span_gt__lt_/span_gt__co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think we need your .blend file as gryff suggested. If I load the mesh _qt_Cube_qt_ from your babylon file_co_ it works. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tFirst I thought it is because of the white spaces in the mesh name - tested it by rename one of mine and it still works. So post your .blend file and we can help _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tedit_dd_ Maybe it has something to do with your materials. In the log-file you can see that there are some _t_uvs_t__co_ but no _t_uvs2_t_. Try to delete all materials and test it again. (Warning_dd_ can be misinformation_co_ I_t_m rather a modeler and relatively new to the materials and textures section)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"svatopluk","Date":"2016-09-15T16:30:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWell_co_ I will post the blender file.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tUse case is this. In the file there is a tree compose of several meshes which I need to use multiple times in my 3D game. I don_t_t know what is the best way to use the tree from the blender file without camera_co_ light or other stuff. I just need 30 instances of the tree to place on the ground.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso please note that I didn_t_t make that blender tree I downloaded it from some site and import it in blender and added materials.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo_co_ please help.\n_lt_/p_gt_\n\n_lt_p_gt__lt_a class_eq__qt_ipsAttachLink_qt_ href_eq__qt_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_9480_qt__gt_tree.blend_lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2016-09-15T19:47:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/22855-svatopluk/?do_eq_hovercard_qt_ data-mentionid_eq__qt_22855_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/22855-svatopluk/_qt_ rel_eq__qt__qt__gt_@svatopluk_lt_/a_gt_ _dd_ Thanks for the blend file _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tI took a look at the file - that tree is huge. People make smaller skyboxes!! The lamp and camera were inside the tree!!_lt_img alt_eq__qt__dd_o_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_ohmy.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/ohmy@2x.png 2x_qt_ title_eq__qt__dd_o_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tSo_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1.) I applied the rotation to the meshes_co_ removed the basic lamp and added a _qt_Hemi_qt_ light_co_ and re-positioned the camera so the tree could be viewed properly in the _lt_a href_eq__qt_http_dd_//www.babylonjs.com/sandbox/_qt_ rel_eq__qt_external nofollow_qt__gt_Babylon Sandbox_lt_/a_gt_ (see image below)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2. I re-scaled the tree to one tenth (1/10) of its original size and applied that scale_co_ and again re-positioned the camera. It worked fine in the Sandbox also.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo here is a zip flie of your tree with a blend file for case 1_co_ and another for case 2 above _dd_ _lt_a href_eq__qt_https_dd_//dl.dropboxusercontent.com/u/70260871/webgl/svatopluk/trees.zip_qt_ rel_eq__qt_external nofollow_qt__gt_new trees_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOhh and use _qt_BABYLON.SceneLoader.Load_qt_ functionality _lt_strong_gt_not_lt_/strong_gt_  _qt_BABYLON.SceneLoader.ImportMesh_qt_ as this will not import the lights and camera from blender.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHope that helps.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tcheers_co_ gryff _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_09/tree1.png.e65626786a01844bdcec3f07108a8be7.png_qt_ data-fileid_eq__qt_9482_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_tree1.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_9482_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_09/tree1.png.e65626786a01844bdcec3f07108a8be7.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"svatopluk","Date":"2016-09-15T21:00:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks a lot.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI will try this and take a look at the result.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Steffen","Date":"2016-09-16T07:27:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/22855-svatopluk/?do_eq_hovercard_qt_ data-mentionid_eq__qt_22855_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/22855-svatopluk/_qt_ rel_eq__qt__qt__gt_@svatopluk_lt_/a_gt__co__lt_/span_gt__lt_br /_gt__lt_br /_gt_\n\tIt is always good to apply the scale and rotation of your meshes in blender - except if you want a rotated coordinate system (this can sometimes be tricky....)._lt_br /_gt__lt_br /_gt_\n\tSo the solution of @gryff works of course_co_ but you don_t_t have to use the camera or light of blender._lt_br /_gt__lt_br /_gt_\n\tJust scale the mesh down (I have now dimensions of max 5 units in z-direction)_co_ apply the rotations and scale (STRG+A) and move both the leaves and the trunk into an _qt_empty_qt_ (a group - see picture)._lt_br /_gt__lt_img alt_eq__qt_tree_empty.PNG_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_9496_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_09/tree_empty.PNG.a7cfa62f2988f1cf35b394f9daf26e0f.PNG_qt_ /_gt__lt_br /_gt_\n\tLoad this empty-mesh called _qt_tree_qt_ with the ImportMesh function and everything is fine. Remember you have to set a camera and light in Babylon (use the basic playground demo for example)._lt_br /_gt__lt_br /_gt_\n\tIn addition_co_ I fixed a bug in your mesh (see picture)._lt_br /_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_9495_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_09/mesherror.PNG.f1cd2ff449bed9cd3e8bcca0be7a0089.PNG_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_mesherror.PNG_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_9495_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_09/mesherror.thumb.PNG.662743bae3ac11a5a5304fe835db4c03.PNG_qt_ style_eq__qt_width_dd_300px_sm_height_dd_auto_sm__qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd here is the blend-file_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink_qt_ href_eq__qt_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_9497_qt_ data-fileid_eq__qt_9497_qt_ rel_eq__qt__qt__gt_tree.blend_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"svatopluk","Date":"2016-09-16T21:45:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThat was helpful_co_ thanks... I have managed to place the trees on the terrain.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks all.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere is only a problem with bounding boxes when the object is placed on the ground. The bounding box is squashed. When I call mesh.getBoundingInfo().boundingBox.vectorsWorld I get the points in array with same value. I_t_m not sure how to get past that.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]