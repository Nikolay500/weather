import React from "react"
import { Spin } from "antd"
import "./loading.css"

const Loader:React.FC = () => {

    return(
        <div className="loader">
            <Spin size="large" />
            <p>Loading...</p>
        </div>
    )
}

export default Loader;