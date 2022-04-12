
console.log("isnide graph")
var feedback = JSON.parse(window.localStorage.getItem("optionFeedback"))
var edgeListTemp = JSON.parse(window.localStorage.getItem("optionSelected"))
var edgeList = []
if (!feedback) feedback = []
if (!edgeListTemp) edgeListTemp = []
let yAxis = 0;
function makeEdgeList (arr){
    var res = []
    var e = "e"
    for(let i=0; i < arr.length-1; i++){
        var temp = {id: e.concat(arr[i],"-",arr[i+1]), edge:"true", source: arr[i],target:arr[i+1], animated:true, style:{stroke:'black'}}
        res = res.concat([temp])
    }
    return res
}
console.log(edgeListTemp)
edgeList = makeEdgeList(edgeListTemp)
console.log(edgeList)
function yAxisLocation(stay = false) {
    if (stay) {
        return yAxis;
    }
    yAxis += 150;

    return yAxis;
}

function xAxisLocation(pos = 0) {
    // pos = -1, 0 1 (three options)
    if (pos === -1) {
        return 100;
    } else if (pos === 0) {
        return 400;
    }else if(pos === 3)
    {
        return 250
    } else if (pos === 5){
        return 550
    }
     else {
        return 700;
    }
}

var elem = [
    //nodes
    {
        id: "start",
        data: { label: "Start"},
        position: { x: xAxisLocation(), y: yAxisLocation() }
        , type: "selectorNode"
    },
    {
        id: "oncampus",
        data: { label: "On Campus" },
        position: { x: xAxisLocation(-1), y: yAxisLocation() }
        , type: "selectorNode"
    },
    {
        id: "offcampus",
        data: { label: "Off Campus" },
        position: { x: xAxisLocation(), y: yAxisLocation(true) }
        , type: "selectorNode"
    },{
        id: "commute",
        data: { label: "Commute" },
        position: { x: xAxisLocation(1), y: yAxisLocation(true) }
        , type: "selectorNode"
    },
    {
        id: "campusstore",
        data: { label: "Campus store" },
        position: { x: xAxisLocation(-1), y: yAxisLocation() }
        , type: "selectorNode"
    },{
        id: "library",
        data: { label: "Rent from the libraries" },
        position: { x: xAxisLocation(0), y: yAxisLocation(true) }
        , type: "selectorNode"
    },{
        id: "secondhand",
        data: { label: "Buy second-hand" },
        position: { x: xAxisLocation(1), y: yAxisLocation(true) }
        , type: "selectorNode"
    },
    {
        id: "cash",
        data: { label: "Cash" },
        position: { x: xAxisLocation(-1), y: yAxisLocation() }
        , type: "selectorNode"
    },
    {
        id: "creditcard",
        data: { label: "Credit Card" },
        position: { x: xAxisLocation(0), y: yAxisLocation(true) }
        , type: "selectorNode"
    },
    {
        id: "debitcard",
        data: { label: "Debit Card" },
        position: { x: xAxisLocation(1), y: yAxisLocation(true) }
        , type: "selectorNode"
    },
    {
        id: "invest",
        data: { label: "Invest" },
        position: { x: xAxisLocation(-1), y: yAxisLocation() }
        , type: "selectorNode"
    },
    {
        id: "save",
        data: { label: "Save" },
        position: { x: xAxisLocation(), y: yAxisLocation(true) }
        , type: "selectorNode"
    },
    {
        id: "spend",
        data: { label: "Spend" },
        position: { x: xAxisLocation(1), y: yAxisLocation(true) }
        , type: "selectorNode"
    },
    {
        id: "tfsayes",
        data: { label: "Yes" },
        position: { x: xAxisLocation(3), y: yAxisLocation() }
        , type: "selectorNode"
    },
    {
        id: "tfsano",
        data: { label: "No" },
        position: { x: xAxisLocation(5), y: yAxisLocation(true) }
        , type: "selectorNode"
    },
    {
        id: "taxmyself",
        data: { label: "Filed taxes myself" },
        position: { x: xAxisLocation(-1), y: yAxisLocation() }
        , type: "selectorNode"
    },
    {
        id: "taxprof",
        data: { label: "Asked professional" },
        position: { x: xAxisLocation(0), y: yAxisLocation(true) }
        , type: "selectorNode"
    },
    {
        id: "taxnever",
        data: { label: "Never filed tax" },
        position: { x: xAxisLocation(1), y: yAxisLocation(true) }
        , type: "selectorNode"
    },
    {
        id: "resourcetaxyes",
        data: { label: "I know resources for tax" },
        position: { x: xAxisLocation(3), y: yAxisLocation() }
        , type: "selectorNode"
    },
    {
        id: "resourcetaxno",
        data: { label: "Don't know resources for tax" },
        position: { x: xAxisLocation(5), y: yAxisLocation(true) }
        , type: "selectorNode"
    },
    {
        id: "doctaxyes",
        data: { label: "I know what documents to fill" },
        position: { x: xAxisLocation(3), y: yAxisLocation() }
        , type: "selectorNode"
    },
    {
        id: "doctaxno",
        data: { label: "I don't know what documents to fill" },
        position: { x: xAxisLocation(5), y: yAxisLocation(true) }
        , type: "selectorNode"
    }
];

function findElem(id, arr) { // find the index in elem arr if it exist
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id == id) {
            return i
        }
    }
    return false
}
function addFeedback(elem, feedback) { //this adds the element to elem arr from feedback
    for (let i = 0; i < feedback.length; i++) {
        var x = findElem(feedback[i].id, elem)
        if (x) {
            elem[x].data.feedback = feedback[i].value
        }

    }
    return elem
}

elem = elem.concat(edgeList);
elem = addFeedback(elem, feedback)


export default elem;