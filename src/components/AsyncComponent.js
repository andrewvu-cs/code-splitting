import React, {useState, useEffect} from 'react'


export default function asyncComponent(importComponent){
    const AsyncComponent = (props) => {
        const [component, setComponent] = useState(null);

        useEffect(() => {
            const { default: component} = importComponent()
            setComponent(component);
        }, [])

        const Component = component;
        return Component ? <Component {...props} /> : null;
    }

    return AsyncComponent;
}
