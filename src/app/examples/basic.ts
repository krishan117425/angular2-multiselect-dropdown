import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './views/view.html'
})
export class BasicExample implements OnInit {

    itemList = [];
    selectedItems = [];
    settings = {};

    constructor() { }
    ngOnInit() {

        this.itemList = [
            { "id": 1, "itemName": "India" },
            { "id": 2, "itemName": "Singapore" },
            { "id": 3, "itemName": "Australia" },
            { "id": 4, "itemName": "Canada" },
            { "id": 5, "itemName": "South Korea" },
            { "id": 6, "itemName": "Brazil" }
        ];

        this.selectedItems = [
            { "id": 1, "itemName": "India" },
            { "id": 2, "itemName": "Singapore" },
            { "id": 3, "itemName": "Australia" },
            { "id": 4, "itemName": "Canada" }];

        this.settings = {
            text: "Select Countries",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            classes: "myclass custom-class"
        };
    }
    onItemSelect(item: any) {
        console.log(item);
        console.log(this.selectedItems);
    }
    OnItemDeSelect(item: any) {
        console.log(item);
        console.log(this.selectedItems);
    }
    onSelectAll(items: any) {
        console.log(items);
    }
    onDeSelectAll(items: any) {
        console.log(items);
    }

    title: string = "Basic example";
    tsgist: string = "CuppaLabs/ee72fbc7b21dad7e4e7664c5b1553235";
    htmlgist: string = "CuppaLabs/eb78d42ab7971fda6493586e329bfdb8";
    tstitle: string = "basic.ts"
    htmltitle: string = "basic.html";
}