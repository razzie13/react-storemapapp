import React from 'react'

import ItemLocator from '../ItemLocator/ItemLocator'

export default function StoreMap(props) {
    return (
        <>
        <div id="storecontainer" className="store-map">

            {/* <!-- aisles --- numbered from right to left -- aisle 8 is on left hand side of page --> */}

            {/* <!-- shelf 1 - right --> */}
            <div id="aisle1a" className="aislea aisle1a"></div>

            {/* <!-- shelf 1 - left side --> */}
            <div id="aisle1b" className="aisleb aisle1b"></div>

            {/* <!-- shelf 2 - right side --> */}
            <div id="aisle2a" className="aislea aisle2a"></div>

            {/* <!-- shelf 2 - left side --> */}
            <div id="aisle2b" className="aisleb aisle2b"></div>

            {/* <!-- shelf 3 - right side --> */}
            <div id="aisle3a" className="aislea aisle3a"></div>

            {/* <!-- shelf 3 - left side --> */}
            <div id="aisle3b" className="aisleb aisle3b"></div>

            {/* <!-- shelf 4 - right side --> */}
            <div id="aisle4a" className="aislea aisle4a"></div>

            {/* <!-- shelf 4 - left side --> */}
            <div id="aisle4b" className="aisleb aisle4b"></div>

            {/* <!-- shelf 5 - right --> */}
            <div id="aisle5a" className="aislea aisle5a"></div>

            {/* <!-- shelf 5 - right --> */}
            <div id="aisle5b" className="aisleb aisle5b international-foods"></div>

            {/* <!-- shelf 6 - right --> */}
            <div id="aisle6a" className="aislea aisle6a international-foods"></div>

            {/* <!-- shelf 6 - right --> */}
            <div id="aisle6b" className="aisleb aisle6b"></div>

            {/* <!-- shelf 7 - right --> */}
            <div id="aisle7a" className="aislea aisle7a"></div>

            {/* <!-- shelf 7 - right --> */}
            <div id="aisle7b" className="aisleb aisle7b"></div>

            {/* <!-- shelf 8 - right --> */}
            <div id="aisle8a" className="aislea aisle8a"></div>

            {/* <!-- shelf 8 - right --> */}
            <div id="aisle8b" className="aisleb aisle8b"></div>

            {/* <!-- grocery bunkers --> */}
            <div id="bunker1"   className="bunker bunker1"></div>
            <div id="bunker2"   className="bunker bunker2"></div>
            
            <div id="bunker4"   className="bunker bunker4"></div>
            <div id="bunker5"   className="bunker bunker5"></div>
            <div id="bunker6"   className="bunker bunker6"></div>

            {/* <!-- meat bunkers --> */}
            <div id="meatbunker1" className="meat meatbunker meatbunker1"></div>
            <div id="meatbunker2" className="meat meatbunker meatbunker2"></div>  

            {/* <!-- bakery tables --> */}
            <div id="bakery bakerytable1"  className="bakery bakerytable bakerytable1"></div>
            <div id="bakery bakerytable2"  className="bakery bakerytable bakerytable2"></div>
            <div id="bread"                className="bakery bread"></div>

                        {/* <!-- produce tables --> */}
            <div id="producetablelong"      className="produce producetablelong"></div>
            <div id="producetableshort1"    className="produce producetableshort producetableshort1"></div>
            <div id="producetableshort2"    className="produce producetableshort producetableshort2"></div>

            {/* <!-- produce edges --> */}
            <div id="citruswall"    className="produce citruswall"></div>

            {/* <!-- four-blocks --> */}
            <div id="fourblockoneone"       className="fourblock fourblockrowone fourblockcolumnone"></div>
            <div id="fourblocktwoone"       className="fourblock fourblockrowtwo fourblockcolumnone"></div>
            <div id="fourblockthreeone"     className="fourblock fourblockrowthree fourblockcolumnone"></div>
            <div id="fourblockfourone"      className="fourblock fourblockrowfour fourblockcolumnone"></div>
            <div id="fourblockfiveone"      className="fourblock fourblockrowfive fourblockcolumnone"></div>
            <div id="fourblockonetwo"       className="fourblock fourblockrowone fourblockcolumntwo international-foods"></div>
            <div id="fourblocktwotwo"       className="fourblock fourblockrowtwo fourblockcolumntwo international-foods"></div>
            <div id="fourblockthreetwo"     className="fourblock fourblockrowthree fourblockcolumntwo international-foods"></div>
            <div id="fourblockfourtwo"      className="fourblock fourblockrowfour fourblockcolumntwo international-foods"></div>
            <div id="fourblockfivetwo"      className="fourblock fourblockrowfive fourblockcolumntwo international-foods"></div>
            <div id="fourblockfourthree"    className="fourblock fourblockrowfour fourblockcolumnthree"></div>
            <div id="fourblockonefour"      className="fourblock fourblockrowone fourblockcolumnfour deal-zone"></div>
            <div id="fourblocktwofour"      className="fourblock fourblockrowtwo fourblockcolumnfour deal-zone"></div>
            <div id="fourblockthreefour"    className="fourblock fourblockrowthree fourblockcolumnfour deal-zone"></div>
            <div id="fourblockfourfour"     className="fourblock fourblockrowfour fourblockcolumnfour deal-zone"></div>
            <div id="fourblockfivefour"     className="fourblock fourblockrowfive fourblockcolumnfour deal-zone"></div>
            <div id="fourblockonefive"      className="fourblock fourblockrowone fourblockcolumnfive"></div>
            <div id="fourblocktwofive"      className="fourblock fourblockrowtwo fourblockcolumnfive"></div>
            <div id="fourblockthreefive"    className="fourblock fourblockrowthree fourblockcolumnfive"></div>

            <div id="store-entrance"        className="store-entrance">entrance</div>
            <div id="store-checkouts"       className="store-checkouts">checkouts</div>
            
            <ItemLocator display={props.display} searchedItem={props.searchedItem} hideLocator={props.hideLocator} removeGroceryItem={props.removeGroceryItem}/>
        
        
        </div>

        </>

    )
}
