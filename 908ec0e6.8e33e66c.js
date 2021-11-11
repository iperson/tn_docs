(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{150:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image_input_node-d314548419ca9acfbf7b64706a221964.png"},151:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/grid_to_height_node-3bb46e017541dea680b562eb92bc1af5.png"},152:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/grid_safety_ok_in_z-cd43045653812153cbd03a04e7d73f50.gif"},153:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/grid_safety_no_no-37b2611b513bf458cb0a5ae48ccd3a89.gif"},154:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image_output_basic-c9d8ae3d7c14ed116d3568a1f9b5e5e9.png"},155:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image_output_complex-ee4cf0fa5992c0242c58a63d39fce2ac.png"},156:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/erosion_node_outputs-42e18e4d880b9f2d3007d0f0f3aed9e1.gif"},157:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/save_layers_as-d508aa4ade57d860b306e150c1045f9e.gif"},80:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return d})),a.d(t,"default",(function(){return r}));var i=a(3),n=a(7),s=(a(0),a(96)),o={id:"io_nodes",title:"Input / Output Nodes"},l={unversionedId:"io_nodes",id:"io_nodes",isDocsHomePage:!1,title:"Input / Output Nodes",description:"Terrain Nodes works on image data and outputs results either as images or / and as",source:"@site/docs\\io_nodes.md",slug:"/io_nodes",permalink:"/tn_docs/docs/io_nodes",editUrl:"https://github.com/iperson/tn_docs/edit/master/website/docs/io_nodes.md",version:"current",sidebar:"someSidebar",previous:{title:"Getting Started",permalink:"/tn_docs/docs/getting_started"},next:{title:"Bake Texture Tool",permalink:"/tn_docs/docs/additional_tools"}},d=[{value:"Image Input Node",id:"image-input-node",children:[]},{value:"Grid to Height Map Node",id:"grid-to-height-map-node",children:[]},{value:"What is a grid object in Terrain Nodes?",id:"what-is-a-grid-object-in-terrain-nodes",children:[]},{value:"Image Output Node",id:"image-output-node",children:[]}],c={toc:d};function r(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(s.b)("wrapper",Object(i.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Terrain Nodes works on image data and outputs results either as images or / and as\nvertex weights / colors to a grid object."),Object(s.b)("h3",{id:"image-input-node"},"Image Input Node"),Object(s.b)("p",null,Object(s.b)("img",{alt:"img",src:a(150).default})),Object(s.b)("p",null,"The Image Input node is very simple, if your image is just grayscale data then all four outputs will be same.\nNote that if the image you are using is on the hard drive and it has been updated this change will be detected\nautomatically, causing the node tree execution to restart from that Image Node."),Object(s.b)("h3",{id:"grid-to-height-map-node"},"Grid to Height Map Node"),Object(s.b)("p",null,Object(s.b)("img",{alt:"img",src:a(151).default})),Object(s.b)("p",null,"This node converts grid object (vertex z value) to single channel image data. Such as an ",Object(s.b)("a",Object(i.a)({parentName:"p"},{href:"https://youtu.be/f9OxD3qbSiM?t=36"}),"ANT Landscape")," object."),Object(s.b)("h3",{id:"what-is-a-grid-object-in-terrain-nodes"},"What is a grid object in Terrain Nodes?"),Object(s.b)("p",null,"A grid has equal spacing (edge length) in the X and Y direction. A grid has an equal\nnumber of vertices on all sides. If you take a plane with only 4 vertices and subdivide it\n(using ",Object(s.b)("strong",{parentName:"p"},"Simple")," type), that is still a grid object, because all those rules will be met. The only displacement\nis allowed in the Z axis. So, if you look at a grid from the top, you will not see any\nvertices out of place, but if you look from the side you will see the displacement."),Object(s.b)("h4",{id:"only-z-axis-movement-of-vertices-is-ok-you-can-lock-to-only-use-z-axis-in-sculpt-mode-as-well"},"Only z axis movement of vertices is ok (you can lock to only use z axis in sculpt mode as well):"),Object(s.b)("p",null,Object(s.b)("img",{alt:"img",src:a(152).default})),Object(s.b)("h4",{id:"everything-else-will-break-grid-import"},"Everything else will break grid import:"),Object(s.b)("p",null,Object(s.b)("img",{alt:"img",src:a(153).default})),Object(s.b)("p",null,"Scaling the entire grid in just 'Y' or 'X' axis as seen here is not safe either."),Object(s.b)("h3",{id:"image-output-node"},"Image Output Node"),Object(s.b)("p",null,"Image Output node will convert Terrain Nodes data into an image format and save it to disc."),Object(s.b)("p",null,Object(s.b)("img",{alt:"img",src:a(154).default})),Object(s.b)("p",null,"Image Output node interface will change depending on the input node. Currently Erosion Node has\na specific relationship with the Output Image and Output Grid nodes. This is because Erosion Node\nhas several outputs for different layers. So to save all layers at the same time and possibly in the same\nimage file (as sepparate channels), the Output Node will change interface to the following."),Object(s.b)("p",null,Object(s.b)("img",{alt:"img",src:a(155).default})),Object(s.b)("p",null,"As you can see all of the layers correspond to Erosion Node outputs, however Image Output and Grid Output nodes\nonly need to be connected to any one of them like so:"),Object(s.b)("p",null,Object(s.b)("img",{alt:"img",src:a(156).default})),Object(s.b)("p",null,"All of the above connection changes result in the same output."),Object(s.b)("h4",{id:"output-options"},"Output Options"),Object(s.b)("p",null,"When saving layers from the Erosion Node you can save each layer as an individual image\n(so RGB will all have the same value). Or you can pack all of the layers into image channels.\nThe way Terrain Nodes handles this is it generates two image files stwr.exr and susf.exr. Each image\ncontains the following layers in this exact order:"),Object(s.b)("h4",{id:"stwrexr"},"stwr.exr"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Sediment"),Object(s.b)("li",{parentName:"ul"},"Terrain"),Object(s.b)("li",{parentName:"ul"},"Water"),Object(s.b)("li",{parentName:"ul"},"Rock")),Object(s.b)("h4",{id:"susfexr"},"susf.exr"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Suspended Sediment"),Object(s.b)("li",{parentName:"ul"},"Slope"),Object(s.b)("li",{parentName:"ul"},"Flow Map"),Object(s.b)("li",{parentName:"ul"},"This layer is 1.0 by default as it is currently empty.")),Object(s.b)("p",null,"You can switch between individual images and packed image channels as output:"),Object(s.b)("p",null,Object(s.b)("img",{alt:"img",src:a(157).default})),Object(s.b)("p",null,"You define an Output Suffix that will append to the default names created by Terrain Nodes."),Object(s.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(s.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(s.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(s.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("h4",Object(i.a)({parentName:"div"},{id:"if-you-check-auto-save-the-images-in-the-folder-with-the-same-name-will-be-overwritten"}),"If you check auto save the images in the folder with the same name will be overwritten!"))))}r.isMDXComponent=!0}}]);