import { Component, OnInit } from '@angular/core';
import { tileLayer, latLng, marker, icon, Icon } from 'leaflet';
@Component({
	selector: 'app-map',
	templateUrl: './map.component.html',
	styleUrls: [ './map.component.css' ]
})
export class MapComponent implements OnInit {
	options = {
		layers: [ tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }) ],
		zoom: 5,
		center: latLng(47.08247, 2.39685)
	};
    layers = [];
    defaultIcon:string = '../assets/mapIconBlack.png';
    layer=marker([ 47, 2 ], {
        icon: icon({
            iconSize: [ 25, 41 ],
            iconAnchor: [ 13, 41 ],
            iconUrl: this.defaultIcon,
        })
    });
	addMarker(lat: number, long: number,iconUrl:string,shadowUrl:string,text:string) {
		let layer = marker([ lat, long ], {
			icon: icon({
				iconSize: [ 25, 41 ],
				iconAnchor: [ 13, 41 ],
				iconUrl: iconUrl,
				shadowUrl: shadowUrl
			})
        });
        layer.bindPopup('<p class="popup">' + text + '</p>', {autoPan: true});
        this.layers.push(layer)
    }
    cleanMarkers(){
        this.layers = []
    }
	constructor() {}

	ngOnInit() {
        this.addMarker(47,2,this.defaultIcon,'','text');
    }
}
