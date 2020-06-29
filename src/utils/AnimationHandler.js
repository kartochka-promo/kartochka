
export default new class AnimationHandler {

    addAnimations(components, animation, timeout){
        for(let component of components){
            component.style.animation = animation;
            setTimeout(() =>{component.style.animation = ''},timeout);
        }
    }
    addAnimation(component, animation, timeout){
        component.style.animation = animation;
        setTimeout(() =>{component.style.animation = ''},timeout);
    }

}
