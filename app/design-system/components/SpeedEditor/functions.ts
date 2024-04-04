

export const assignSceneNumbers = () => {
    // Select all elements with the class 'scene_heading'
    const sceneElements = document.querySelectorAll('.scene_heading');

    sceneElements.forEach((element, index) => {
        // Scene numbers start from 1, so add 1 to the index
        const sceneNumber = index + 1;

        // Set the 'data-prefix' attribute with the scene number
        element.setAttribute('data-scene-number', sceneNumber.toString());
    });
};