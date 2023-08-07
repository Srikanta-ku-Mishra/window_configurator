import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm//loaders/GLTFLoader";

const scene = new THREE.Scene();
// const camera = new THREE.OrthographicCamera(
//   (window.innerWidth * 50) / -2,
//   (window.innerWidth * 50) / 2,
//   (window.innerHeight * 50) / 2,
//   (window.innerHeight * 50) / -2,
//   1,
//   1000
// );
// scene.add(camera);

const camera = new THREE.PerspectiveCamera(
  50,
  window.innerWidth / window.innerHeight,
  0.1,
  100000
);
scene.add(camera);
// scene.backgroundBlurriness = 0.5;
const renderer = new THREE.WebGLRenderer();
renderer.shadowMap.enabled = true;
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//#region
// const geometry = new THREE.BoxGeometry(5, 5, 5);
// const geometry2 = new THREE.SphereGeometry(5 );
// const geometry3 = new THREE.TorusGeometry(5 ,2, 10, 50);
// const geometry4 = new THREE.IcosahedronGeometry(5);
// const geometry5 = new THREE.CylinderGeometry(5, 5, 20, 32);

// MeshBasic Material
// const material2 = new THREE.MeshStandardMaterial(
//   {
//    map: new THREE.TextureLoader().load('moon.jpg'),

//   color: 0xffffff,
//   opacity: 0.3,
//   roughness: 0.5
//   });

// In MeshBasicmaterial there are some properties are availabale like transparent and opacity

// const material1 = new THREE.MeshLambertMaterial(
//   {
//     color: 0xf4555c,
//     wireframe: false,
//     opacity: 1,
//     // emissive: 0xffffff,
//     map: new THREE.TextureLoader().load('wood.jpg')
//   });
// const material3 = new THREE.MeshPhongMaterial({
//   color: 0xffffff,
//   shininess: 0.1,
//   map: new THREE.TextureLoader().load('fire.jpg')

// });
// hello
// lineBasic or Dashed material you have to use this code
// const material4 = new THREE.MeshBasicMaterial({
//   map: new THREE.TextureLoader().load('ice.jpg')

// });
// this function should called for dashed line material
// geometry4.computeLineDistances();

// Points material codes
// const material5 = new THREE.PointsMaterial({
//   color: 0xffffff
// })

// Mesh Matcap Material
// const material6 = new THREE.MeshStandardMaterial({
//   color: 0xe70814,
//   map: new THREE.TextureLoader().load('metal.jpg')
// });

// Sprit Material
// const materialsprit = new THREE.SpriteMaterial({
//   map: new THREE.TextureLoader().load('ice.jpg')
// });
//  const sprit = new THREE.Sprite(materialsprit);
//  sprit.scale.set(200, 200, 1);
//  sprit.position.z = -100;
//  scene.add(sprit);
// Sprit only faces to the screen and it acts as a 2d object which taeks only the parameter as material

// const cube = new THREE.Mesh(geometry, material1);
// cube.position.set(13, 0, 0);
// // cube.lookAt(0 ,0 ,0);
// const sphere = new THREE.Mesh(geometry2, material2);
// const torus = new THREE.Mesh(geometry3 , material3);
// torus.position.set(-18 , 0 ,0);
// const icso = new THREE.Mesh(geometry4 , material4);
// icso.position.set(25 ,0 ,0);
// const cylinder = new THREE.Points(geometry5 , material5);
// const matcap = new THREE.Mesh(geometry , material6);
// matcap.position.set(0 , 0 ,10);

// scene.add(cube , sphere , torus, icso, cylinder, matcap);
// color code starts with 0x :- it means it works as a hexa decimal values
// camera.position.z = 5;
// const controls = new OrbitControls(camera, renderer.domElement);

// Grid in the scene to help to locate the location of the object
// const gridhelper = new THREE.GridHelper(200, 50);
// scene.add(gridhelper);

// Ambient light code

// const ambientlight = new THREE.AmbientLight(0xffffff, 1 );
// scene.add(ambientlight);
// this light is helps to light all the material and objects globally

// point light code

// const pointlight = new THREE.PointLight(0xdf4065, 1, 100);
// pointlight.position.set(0, 10, 0);
// scene.add(pointlight);
// you can add the PointLightHelper() method to know in which direction the light is coming from
// const pointlighthelper = new THREE.PointLightHelper(pointlight);
// scene.add(pointlighthelper);
// RectArea Light code

// const width = 2.0;
// const height = 2.0;
// // const rect = new RectAreaLightUniformsLib();
// // scene.add(rect);
// // rect.init();
// RectAreaLightUniformsLib.init();
// const intensity = 1;
// const rectLight = new THREE.RectAreaLight(0xffffff, intensity, width, height);
// rectLight.position.set(5, 5, 0);
// rectLight.lookAt(0, 0, 0);
// scene.add(rectLight);

// RectArea Light Helper code

// const rectLightHelper = new RectAreaLightHelper(rectLight);
// scene.add(rectLightHelper);

// Directional Light code
// White directional light at half intensity shining from the top.

// const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5);
// directionalLight.position.set(-30, 5, 0);
// directionalLight.lookAt(10, 10, 10);
// scene.add( directionalLight );

// Directional Light Helper code

// const directionalhelper = new THREE.DirectionalLightHelper(directionalLight);
// scene.add(directionalhelper);

// // Directional Light 2
// const directionallight2 = new THREE.DirectionalLight(0xffffff , 1);
// directionallight2.position.set(0, 0, 20);
// // directionallight2.lookAt(10,10,10);
// directionallight2.target = matcap;
// scene.add(directionallight2);

// const targetobject = new THREE.Object3D();
// scene.add(targetobject);
// Light.target = targetobject;

// const dirhelper = new THREE.DirectionalLightHelper(directionallight2);
// scene.add(dirhelper);
// Hemisphere Light code
// const upcolor = 0xc32d2d;
// const downcolor = 0x4040ff;

// const hemilight =  new THREE.HemisphereLight(upcolor ,  downcolor);
// hemilight.position.set(5 ,5 , 0);
// hemilight.lookAt(0, 0, 0);
// scene.add(hemilight);

// // Hemisphere Light Helper code
//  const hemilighthelper = new THREE.HemisphereLightHelper(hemilight , 5);
// //  5 is the size of the sphere then you can add color property(optional)
//  scene.add(hemilighthelper);

// Spot Light code
// const spotLight = new THREE.SpotLight( 0x2fea54 );
// spotLight.position.set( 10, 10, 10 );

// spotLight.castShadow = true;

// spotLight.shadow.mapSize.width = 10;
// spotLight.shadow.mapSize.height = 10;

// spotLight.shadow.camera.near = 50;
// spotLight.shadow.camera.far = 40;
// spotLight.shadow.camera.fov = 30;

// scene.add( spotLight );

// Spot light Helper code(to show the position or the source of the source light)
// const spotlighthelper = new THREE.SpotLightHelper(spotLight);
// scene.add(spotlighthelper);

// Light code
// const light = new THREE.Light(0x2fea54, 1)
// scene.add(light);

// Light Helper
// const lighthelper = new THREE.PointLightHelper(pointlight);
// scene.add(lighthelper);

// Background Texture Loader or Image Loader
// const bgtexture = new THREE.TextureLoader().load('bg4.png');
// scene.background = bgtexture;

// const animation = new THREE.LoopOnce();
// scene.add(animation);
//#endregion

const r = "Images/";
const urls3 = [
  r + "diamond3.jpg",
  r + "diamond3.jpg",
  r + "diamond3.jpg",
  r + "diamond3.jpg",
  r + "diamond3.jpg",
  r + "diamond3.jpg",
];

const urls = [
  r + "posx.jpg",
  r + "negx.jpg",
  r + "posy.jpg",
  r + "negy.jpg",
  r + "posz.jpg",
  r + "negz.jpg",
];

const urls2 = [
  r + "bg2.jpg",
  r + "bg2.jpg",
  r + "bg2.jpg",
  r + "bg2.jpg",
  r + "bg2.jpg",
  r + "bg2.jpg",
];

const urls4 = [
  "metal.jpg",
  "metal.jpg",
  "metal.jpg",
  "metal.jpg",
  "metal.jpg",
  "metal.jpg",
];

const showRoomUrl = [
  r + "new_park_nx.jpg",
  r + "new_park_ny.jpg",
  r + "new_park_nz.jpg",
  r + "new_park_px.jpg",
  r + "new_park_py.jpg",
  r + "new_park_pz.jpg",
];

const cloud = [
  "cloud.jpg",
  "cloud.jpg",
  "cloud.jpg",
  "cloud.jpg",
  "cloud.jpg",
  "cloud.jpg",
];

const path= "Images/textures/cube/Park2/"
const park = [
  path + "posx.jpg",
  path + "negx.jpg",
  path + "posy.jpg",
  path + "negy.jpg",
  path + "posz.jpg",
  path + "negz.jpg",
];


//#region  Old codes

//#region  shaderMaterial try:
// const shader_basic = {};
// shader_basic.uniforms = {
//   diffuse: { value: new THREE.Color(0.5, 1, 1) },
// };
// shader_basic.vertexShader = [
//   "void main() {",
//   "    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",
//   "}",
// ].join("\n");
// // fragment shader for hatching shader
// shader_basic.fragmentShader = [
//   "uniform vec3 diffuse;",
//   "void main() {",
//   "    gl_FragColor = vec4( diffuse, 1.0 );",
//   "}",
// ].join("\n");
// const shaderMaterial = new THREE.ShaderMaterial({
//   uniforms: THREE.UniformsUtils.clone(shader_basic.uniforms),
//   vertexShader: THREE.ShaderChunk["meshbasic_vert"],
//   fragmentShader: THREE.ShaderChunk["meshbasic_frag"],
// });
// material1.uniforms.diffuse.value = new THREE.Color(0,1,0);
// const cube = new THREE.Mesh(geometry, normalMaterial);

// cube.castShadow = true;
//#endregion

// scene.add(cube);
window.addEventListener("keyup", (event) => {
  if (event.key === "D" || event.key === "d") {
    const diaMaterial = new THREE.MeshPhongMaterial({
      specular: 0xb9f2ff,
      color: 0xffffff,
      shininess: 1,
      envMap: textureCube,
      envMapIntensity: 1,
      reflectivity: 1.0,
      refractionRatio: 1,
      // flatShading: true,
    });
    cube.material = diaMaterial;
  }
});

//#endregion

const textureCube = new THREE.CubeTextureLoader().load(park);

const textureCubeOutside = new THREE.CubeTextureLoader().load(urls);
const textureCubecloud = new THREE.CubeTextureLoader().load(cloud);
//#region Plane:
// scene.background = 0xE2DFD2;
scene.background = textureCube;
// scene.environment = textureCube;
// scene.backgroundBlurriness = 0.2;
const planePiece = new THREE.PlaneGeometry(5,5, 5, 5);
scene.castShadow = true;
const steelColor = 0x919293;
const aluMiniumColr = 0xD3D3D3;
const upvcColor = 0xffffff;

let color = upvcColor;
window.addEventListener("keyup", (event) => {
  if (event.key === "s") {
    color = steelColor;
    addModel(color, true);
  } else if (event.key === "u") {
    color = 0xffffff;
    addModel(color, false);
  }else if (event.key === "a") {
    //#C2C3C4
    color = 0xC2C3C4;
    addModel(color, true);
  }
});
// window.dispatchEvent('onkeyup);

camera.position.z = 2;
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

//#region Lights

const ambientlight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientlight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(40, 40, 200);
directionalLight.lookAt(0, 0, 0);
directionalLight.castShadow = true;
scene.add(directionalLight);

const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight1.position.set(-40, 40, 200);
directionalLight1.lookAt(0, 0, 0);
directionalLight1.castShadow = true;
scene.add(directionalLight1);

const directionalLight2 = new THREE.DirectionalLight(0xffffff, 1);
directionalLight2.position.set(40, 40, -200);
directionalLight2.lookAt(0, 0, 0);
// directionalLight2.castShadow = true;
scene.add(directionalLight2);

const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(0, 0, 100);
pointLight.castShadow = true;
scene.add(pointLight);
addPointLightHelper(pointLight, scene);

const pointLight2 = new THREE.PointLight(0xffffff, 1);
pointLight2.position.set(-100, 50, 50);
pointLight2.castShadow = true;
scene.add(pointLight2);

const cameraPointLinght = new THREE.PointLight(0xffffff, 0.01);
camera.add(cameraPointLinght);
//#endregion

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  controls.update();
  renderer.clearDepth();
}

function addModel(color, isForSteel) {
  const loader = new GLTFLoader();
  loader.load(
    "/gltfModel/scene5.glb",
    function (gltf) {
      scene.add(gltf.scene);
      console.log(gltf);
      gltf.scene.children.forEach((child) => {
        if (child instanceof THREE.Mesh) {
          child.scale.set(0.001, 0.001, 0.001);
          child.position.set(-5, -5, 0);
          for (const meshChild of child.children) {
            if (meshChild.name === "gridHelper") {
              meshChild.parent.remove(meshChild);
            } else if (meshChild.name.startsWith("GlassMesh")) {
              textureCube.magFilter = 2;
              // textureCube.mapping = THREE.CubeReflectionMapping;
              textureCube.mapping = THREE.MirroredRepeatWrapping;
              // const newMat = new THREE.MeshPhongMaterial({
              //   color: 0xadd8e6,
              //   // shininess: 1,
              //   specular: 0xffffff,
              //   transparent: true,
              //   opacity: 0.7,
              //   envMap: textureCube,
              //   envMapIntensity: 1,
              //   // reflectivity: 1,
              //   refractionRatio: 1,
              //   side: THREE.DoubleSide,
              //   flatShading: true,
              // });

              const newMat = new THREE.MeshPhongMaterial({
                color: 0xadd8e6,
                shininess: 1,
                specular: 0xffffff,
                transparent: true,
                opacity: 0.5,
                envMap: textureCube,
                envMapIntensity: 1,
                reflectivity: 0.7,
                refractionRatio: 0.1,
                combine: THREE.MultiplyOperation,
              });
              meshChild.material = newMat;
              for (let j = meshChild.children.length - 1; j >= 0; j--) {
                const child = meshChild.children[j];
                if (
                  child.name.startsWith("boundaryLine") ||
                  child.name.startsWith("GlassIdLabel") ||
                  child.name.startsWith("glassSymbol")
                ) {
                  meshChild.remove(child);
                  child.dispatchEvent({ type: "delete" });
                }
              }
            }
            if (meshChild.name.startsWith("profile")) {
              // debugger;
              for (let j = meshChild.children.length - 1; j >= 0; j--) {
                const child = meshChild.children[j];
                if (
                  child.name.startsWith("boundaryLine")
                ) {
                  meshChild.remove(child);
                  child.dispatchEvent({ type: "delete" });
                }
              }
              let newMat;
              if (!isForSteel) {
                ambientlight.intensity = 1.5;
                newMat = new THREE.MeshPhysicalMaterial({
                  color: 0xffffff,
                  emissive: 0xffffff,
                  emissiveIntensity: 0.1,
                  roughness: 1,
                  metalness: 0.001,
                  clearcoat: 0.5,
                });
              } else {
                ambientlight.intensity = 1.5;
                newMat = new THREE.MeshStandardMaterial({
                  color: color,
                  specularColor: 0xffffff,
                  // specularIntensity: 1,
                  roughness: 0.34,
                  metalness: 0.6,
                  envMap: textureCube,
                  envMapIntensity : 0.1,
                  // polygonOffset: true,
                  // polygonOffsetFactor: 0.5,
                  // polygonOffsetUnits: 1
                });
                newMat.needsUpdate = true
              }
              const text = new THREE.TextureLoader().load("wood4.jpg");
              // text.wrapS = THREE.MirroredRepeatWrapping
              // text.wrapT = THREE.MirroredRepeatWrapping
              // text.repeat.set(0.001, 0.001);
              // newMat.map = text;
              meshChild.castShadow = true;
              // meshChild.receiveShadow = true;
              meshChild.material = newMat;
              meshChild.material.needsUpdate = true
            }
          }
        }
      });
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );
}

function addPointLightHelper(light, scene) {
  const lightHelper = new THREE.PointLightHelper(light, 10);
  scene.add(lightHelper);
}

//#region Old Codes
const planeMat = new THREE.MeshPhongMaterial({
  color: 0xffffff * 1,
  shininess: 0.6,
  specular: 0xffffff,
  // envMap: textureCube,
  side: THREE.DoubleSide,
  clipShadows: true,
});

const planeMatrial = new THREE.MeshStandardMaterial({
  color: 0x808080,
  clipShadows: true,
  // envMap: textureCube,
  roughness: 1,
  envMapIntensity: 0.2,
  side: THREE.DoubleSide,
});

planeMatrial.shadowSide = THREE.DoubleSide;
const planeMesh = new THREE.Mesh(planePiece, planeMat);
planeMesh.rotateX(-Math.PI / 2);
planeMesh.position.y -= 0.75;
planeMesh.receiveShadow = true;
scene.add(planeMesh);

//#endregion

animate();
