import React from "react";

function Page404() {
    return (
        <>
            <div className="container pt-6 mx-auto h-full">
                <div className="flex flex-wrap">
                    <div className="md:w-1/5 w-full pb-6 md:pb-0 md:pr-6">
                        Seems like you're a bit lost :( <br/>
                        Try going back to <a href="/">home</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Page404;