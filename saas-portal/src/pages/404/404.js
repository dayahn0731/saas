import React from "react";

function Page404() {
    return (
        <>
            <div className="container pt-6 mx-auto h-full">
                <div className="flex flex-wrap">
                    <div className="md:w-1/5 w-full pb-6 md:pb-0 md:pr-6">
                        {/* Remove class [ h-24 ] when adding a card block */}
                        {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                        We didn't care enough about a 404 page; you're definitely lost
                    </div>
                </div>
            </div>
        </>
    );
}

export default Page404;