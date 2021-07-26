class InsectionObserverService {
    _observer = null;
    _cbMap = null;

    constructor(params) {
        this._cbMap = new WeakMap();
        this._observer = new IntersectionObserver(
            this._onChange.bind(this), 
            params || {
                root: null,
                threshold: 0.7,
            }
        )
    }

    _onChange(entries) {
        entries.forEach(({ target, intersectionRatio})=>{
            const cb = this._cbMap.get(target);
            cb(intersectionRatio);
        })
    }



    observe(target,cb) {
        this._cbMap.set(target,cb);
        this._observer.observe(target);
    }


    unobserve(target) {
        this._observer.unobserve(target);
        this._cbMap.delete(target);
    }

    destroy() {
        this._observer.disconnect()
    }

}

export default (_,inject) =>  {
    inject('intersectionObserver',new InsectionObserverService())
    inject('intersectionObserverEntity',InsectionObserverService)
}