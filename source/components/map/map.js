import './map.scss';
import '../contact-with-icon/contact-with-icon';

export default function () {
    let map = (function () {
        let GoogleMapsLoader = require('google-maps'),
            map_container = document.getElementById('js_map'),
            height = $('.footer').height(),
            map_contact = document.getElementById('js_map_contact');

        map_container.style.height = (document.documentElement.clientHeight + height) + 'px';
        map_contact.style.bottom = 'calc(50% + ' + height / 2 + 'px)';
        GoogleMapsLoader.KEY = 'AIzaSyDKV4ytXy4jtvoyza8cMxUeVf29gB2fby8';

        return {
            load: function () {
                GoogleMapsLoader.load(function(google) {
                    let mapOptions = {
                        zoom: 16,
                        center: new google.maps.LatLng(40.837099, 69.617920),
                        styles: [{'featureType':'administrative','elementType':'labels.text.fill','stylers':[{'color':'#444444'}]},
                            {'featureType':'landscape','elementType':'all','stylers':[{'color':'#f2f2f2'}]},
                            {'featureType':'poi','elementType':'all','stylers':[{'visibility':'off'}]},
                            {'featureType':'road','elementType':'all','stylers':[{'saturation':-100},{'lightness':45}]},
                            {'featureType':'road.highway','elementType':'all','stylers':[{'visibility':'simplified'}]},
                            {'featureType':'road.arterial','elementType':'labels.icon','stylers':[{'visibility':'off'}]},
                            {'featureType':'transit','elementType':'all','stylers':[{'visibility':'off'}]},
                            {'featureType':'water','elementType':'all','stylers':[{'color':'#4369aa'},{'visibility':'on'}]}],
                    };
                    let map = new google.maps.Map(map_container, mapOptions);

                    new google.maps.Marker({
                        position: new google.maps.LatLng(40.837984, 69.610630),
                        map: map,
                        title: 'Валерий',
                    });
                });
            },
        };
    }());

    map.load();
}
