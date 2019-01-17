[{"Owner":"Nodragem","Date":"2018-11-23T20:32:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSo basically_co_ I am importing meshes from a babylon file_sm_ they are tiles for a maze.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI clone them to create several rotation-wise clones of these tiles and obtain the full set of tiles.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThen based on the results of a maze generator I clone the tiles of my full set of tiles in the right positions to make my maze.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere _lt_u_gt__lt_strong_gt_the results before merge_lt_/strong_gt__lt_/u_gt_ (sorry for the ugly materials and textures_co_ I was testing stuffs)_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_21168_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_11/opera_2018-11-23_19-40-35.png.4b4679ff9142a595ee3c3d6d3f8a6944.png_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_opera_2018-11-23_19-40-35.thumb.png.c883b55aef81d77373501cb9b759b2d9.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_21168_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_11/opera_2018-11-23_19-40-35.thumb.png.c883b55aef81d77373501cb9b759b2d9.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd here is the hierarchy_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img alt_eq__qt_image.png.2736bd2448d1cfbc151b8c6419baadcb.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_21169_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_11/image.png.2736bd2448d1cfbc151b8c6419baadcb.png_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo now_co_ I am going through all the meshes of the maze_co_ and I skip the meshes with 0 vertices while putting the meshes with same material in the same group_co_ then I merge the different group of meshes_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_MergeMeshes(){\n    let groupedMeshes_dd_ IDictionary _eq_ {} \n    let children _eq_ this.root.getChildMeshes(false)_sm_\n    \n    for (let mesh of children){\n        if(mesh.getTotalVertices() _eq__eq_ 0)\n            continue_sm_ //  go to next mesh\n        if(mesh.material){\n            if(!(mesh.material.name in groupedMeshes) )\n                groupedMeshes[mesh.material.name] _eq_ []\n            groupedMeshes[mesh.material.name].push(mesh)_sm_\n        }\n    }\n\n    for (let key in groupedMeshes){\n        let newMesh _eq_ BABYLON.Mesh.MergeMeshes(groupedMeshes[key]_co_ true)_sm_\n        if (newMesh)\n            newMesh.parent _eq_ this.root_sm_\n        }\n\n    let exparents _eq_ this.root.getChildTransformNodes()_sm_\n    for(let parent of exparents){\n        if(!parent.name.endsWith(_t_merged_t_))\n            parent.dispose()_sm_\n    }\n\n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tAnd _lt_u_gt__lt_strong_gt_I get my meshes merged into that_lt_/strong_gt__lt_/u_gt__dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img alt_eq__qt_opera_2018-11-23_19-39-30.png.11fcab73268f03a72c17fa0d9bd4a091.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_21170_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_11/opera_2018-11-23_19-39-30.png.11fcab73268f03a72c17fa0d9bd4a091.png_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut good news_co_ the grouping by material did worked_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img alt_eq__qt_image.png.511af301e701a8ba61c07a8aca8093a3.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_21171_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_11/image.png.511af301e701a8ba61c07a8aca8093a3.png_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI cannot find out what I am doing wrong! _lt_span class_eq__qt_ipsEmoji_qt__gt_😕_lt_/span_gt_ my code was working with mock tiles I was generating with code.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHence I have one main suspect_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- _lt_u_gt__lt_strong_gt_the fact that I clone clones!_lt_/strong_gt__lt_/u_gt_ (I make clones of my tiles to create the full tileset_co_ then I clone these tiles_co_ which can be original meshes or clones_co_ to make the maze)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI believe that _lt_u_gt_when I merge clones of clones_co_ the merge function is taking into account the position of the first clone_lt_/u_gt_ (which here was [0_co_0_co_0])_co_ explaining the results above.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_To test my hypothesis_co_ _lt_/strong_gt_I set the position of the clones of my tileset in a particular fashion to see if the resulting merged mesh will be different / dependent on these new positions.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere are the positions that I used for the tileset clones (instead of having them all at [0_co_0_co_0]) (the top row are original meshes_co_ while the other rows are rotated clones)_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_21172_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_11/image.png.862d955833bf8552f703660024228bf6.png_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_image.thumb.png.b1f20ed7991ce06366711fe205c790ff.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_21172_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_11/image.thumb.png.b1f20ed7991ce06366711fe205c790ff.png_qt_ /_gt__lt_/a_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow here is the results of the mergeMeshes() function when it tries to merge the same maze as on the first screenshot_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_21173_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_11/opera_2018-11-23_20-18-53.png.026327f69216184e156a9767f79479b6.png_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_opera_2018-11-23_20-18-53.thumb.png.54fb000a3bc9ea7d39dee0f46999d462.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_21173_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_11/opera_2018-11-23_20-18-53.thumb.png.54fb000a3bc9ea7d39dee0f46999d462.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think that there is obviously something weird happening when merging clones of clones. It seems that the merge function is mixing the position of the tiles in the tilesets and the position of the tiles in the maze.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think that a simple solution would be to transform the clones in my tileset into real meshes. _lt_strong_gt__lt_u_gt_Any idea of how to transform a clone into a real mesh?_lt_/u_gt__lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2018-11-23T22:59:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tyou can call _lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_makeGeometryUnique I guess top ensures each piece of geometry is unique._lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nodragem","Date":"2018-11-24T11:32:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYeah!!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI was so sure there was some function like that and I was playing around without success with the auto-completion yesterday writing things like _qt_unique_qt__co_ _qt_makeUnique_qt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am happy to know that I was not crazy after all_co_ gonna have another try today and let you know if it worked.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_u_gt_NOTE for others_dd_ _lt_/u_gt_It looks like that the issue I have with merging clones of clones happens also when making instances of clones. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nodragem","Date":"2018-11-24T16:11:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tmmmhh_co_ does not seem to solve the problem.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMy second suspect is that I have empty meshes instead of transform nodes as parent of my tiles...\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nodragem","Date":"2018-11-24T17:17:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI made it works!! Finally!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo _lt_strong_gt__lt_u_gt_this is definitely because my tile_t_s parents were exported as meshes and not as transform nodes_lt_/u_gt__lt_/strong_gt_!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI replaced the parent Mesh of my tiles with a TransformNode like so_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_if(newtile.getChildMeshes()[0]){\n    // NOTE that it works without making the Geometry Unique!\n    newtile _eq_ newtile.getChildMeshes()[0] //.makeGeometryUnique()_sm_ \n}\n\nlet root_tile _eq_ new BABYLON.TransformNode(_t_root._t_+name_co_ newtile.getScene())_sm_\nnewtile.parent _eq_ root_tile_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tAnd it worked!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHence_co_ I guess there are two things that might be asked_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- is that normal that the merge works when I use TransformNodes as parent of my tiles but fails (i.e. does weird things) when using Meshes as parent of my tiles?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t-  could the Blender exporter export the Empty as TransformNode? It seems to make sense.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2018-11-25T23:17:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_235986_qt_ data-ipsquote-contentid_eq__qt_41477_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1543079829_qt_ data-ipsquote-userid_eq__qt_29687_qt_ data-ipsquote-username_eq__qt_Nodragem_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 11/24/2018 at 6_dd_17 PM_co_ Nodragem said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tis that normal that the merge works when I use TransformNodes as parent of my tiles but fails _lt_span_gt_﻿_lt_/span_gt_(i.e. does weird things) when using Meshes as parent of my _lt_span_gt_﻿_lt_/span_gt_tiles?_lt_span_gt_﻿_lt_/span_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI guess it depends of the code and it might also be cloning from the clone as moving to a new transformNode kind of break the clone of clone ?\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_235986_qt_ data-ipsquote-contentid_eq__qt_41477_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1543079829_qt_ data-ipsquote-userid_eq__qt_29687_qt_ data-ipsquote-username_eq__qt_Nodragem_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 11/24/2018 at 6_dd_17 PM_co_ Nodragem said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tcould the Blender exporter export the Empty as TransformNode? It seems to make sense._lt_span_gt_﻿_lt_span_gt_﻿_lt_/span_gt__lt_span_gt_﻿_lt_span_gt_﻿_lt_span_gt_﻿_lt_/span_gt__lt_/span_gt__lt_/span_gt__lt_/span_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tSounds like a nice plan but not sure you would not have the same clone troubles ???\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nodragem","Date":"2018-11-29T12:10:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/?do_eq_hovercard_qt_ data-mentionid_eq__qt_20193_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/_qt_ rel_eq__qt__qt__gt_@Sebavan_lt_/a_gt_ to change the empty mesh for a transform node solves my problem_co_ hence yes I believe that if the Blender exporter was exporting Empty objects into Transform Nodes I would have not experienced the problem. At this stage_co_ I do not think that the problem is due to clones of clones any more._lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2018-11-29T12:34:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]