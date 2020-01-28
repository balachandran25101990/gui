import React from "react"

export default function Card(props) {
    return (
        <div class="container-fluid p-h-0 p-v-20 bg full-height d-flex">
            <div class="d-flex flex-column justify-content-between w-100">
                <div class="container d-flex h-100">
                    <div class="row align-items-center w-100">
                        <div class="col-md-7 col-lg-5 m-h-auto">
                            <div class="card shadow-lg">
                                <div class="card-body">
                                    <div class="d-flex align-items-center justify-content-between m-b-30">
                                        <h2 class="m-b-0">{props.cardTitle}</h2>
                                    </div>
                                    {props.children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}