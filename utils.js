function init_env(scene) {
    let point = new THREE.PointLight(0xffffff);
    point.position.set(400, 200, 300); //点光源位置
    scene.add(point); //点光源添加到场景中

    let point2 = new THREE.PointLight(0xffffff);
    point2.position.set(-400, -200, -300); //点光源位置
    scene.add(point2); //点光源添加到场景中
    //环境光
    let ambient = new THREE.AmbientLight(0x444444);
    scene.add(ambient);

    let axisHelper = new THREE.AxesHelper(200);
    scene.add(axisHelper);

    /**
     * 相机设置
     */
    let width = window.innerWidth; //窗口宽度
    let height = window.innerHeight; //窗口高度
    let k = width / height; //窗口宽高比
    let s = 200; //三维场景显示范围控制系数，系数越大，显示的范围越大
    //创建相机对象
    let camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);
    camera.position.set(200, 300, 200); //设置相机位置
    camera.lookAt(scene.position); //设置相机方向(指向的场景对象)

    let renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height); //设置渲染区域尺寸
    renderer.setClearColor(0xb9d3ff, 1); //设置背景颜色
    document.body.appendChild(renderer.domElement); //body元素中插入canvas对象
    render(renderer, scene, camera);
    let controls = new THREE.OrbitControls(camera, renderer.domElement);
}

function render(renderer, scene, camera) {
    //执行渲染操作指定场景、相机作为参数
    renderer.render(scene, camera);
    window.requestAnimationFrame(function() {
        render(renderer, scene, camera);
    });
}
