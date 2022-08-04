
const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x2a3b4c)// empieza con 0x y luego 
        //de dos en dos para el RGB
        //scene.background = new THREE.Color(0,0,0):
        //scene.background = new THREE.Color("rgb(20,100,70)");

        //Efecto de neblina
        //scene.fog = new THREE.Fog(0x76456c, 0.1,8);


        //Para agregar una imagen de fondo
        /*var loader = new THREE.TextureLoader();
        loader.load('./descarga.jfif', function(texture){
            scene.background = texture;
        })*/

// Canvas
const canvas = document.querySelector('canvas.webgl');

        //Añadir camara
        var camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight);

        
        var newcamera = new THREE.OrthographicCamera(
            5,-5,5,-5,3,10);

        var helper = new THREE.CameraHelper(newcamera);
        //scene.add(helper);
        
        //Renderer
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            alpha: true
        })
        //const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        //Añadir geometria

        const geometry = new THREE.BoxGeometry(5,5,5,10,3,3);
        const material = new THREE.MeshBasicMaterial(
             { color: 0xffff00, wireframe: true } );
        const cube = new THREE.Mesh(geometry, material);
        cube.position.z = -5;
        scene.add(cube);
        
        const circle = new THREE.Mesh(new THREE.CircleGeometry(2,32,0,Math.PI), material);
        scene.add(circle);
        circle.position.x = 5;

        const cone = new THREE.Mesh(new THREE.ConeGeometry(1,3,32,5,true, 0, Math.PI), material);
        cone.position.x = -5;
        scene.add(cone);

        camera.position.z = 15;       
        
        var i = 0;
		function animate() {
				requestAnimationFrame( animate );
               // camera.lookAt(newcamera.position)

               //recorre cada uno de los objetos y sus propiedades
                scene.traverse(function(object){
                    if(object.isMesh ==true){
                        object.rotation.x +=0.01;
                        object.rotation.y +=0.01;
                    }
                    
                })
                /*
				cube.rotation.x += 0.01;
				cube.rotation.y += 0.01;
                circle.rotation.z +=0.01;
                */
                //camera.position.x = Math.cos(i)*30
                //camera.position.z = Math.sin(i)*30

                //i += 0.01

				renderer.render( scene, camera );
			};

			animate();
