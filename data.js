var APP_DATA = {
  "scenes": [
    {
      "id": "0-3-doors",
      "name": "3 Doors",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -1.7301718970139177,
        "pitch": 0.01223300166894603,
        "fov": 2.443460952792061
      },
      "linkHotspots": [
        {
          "yaw": 1.4295129028904894,
          "pitch": 0.17096821110922633,
          "rotation": 6.283185307179586,
          "target": "1-testing"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.7265236171177207,
          "pitch": -0.3295624522799532,
          "title": "Cửa Đi Mở Lùa 3 Ray",
          "text": "M03 - Vàng Champagne"
        },
        {
          "yaw": 0.051768006734377536,
          "pitch": -0.36079933565111055,
          "title": "Cửa Đi Mở Quay 4 Cánh",
          "text": "M04 - Xám Titan"
        },
        {
          "yaw": -3.0391975519924124,
          "pitch": -0.34653470588741797,
          "title": "Cửa Đi Xếp Trượt",
          "text": "M05 - Vàng Hồng"
        }
      ]
    },
    {
      "id": "1-testing",
      "name": "Testing",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -0.15985043885418548,
        "pitch": 0.010648768825486599,
        "fov": 1.572958126384129
      },
      "linkHotspots": [
        {
          "yaw": -2.813119289907778,
          "pitch": 0.047765227092003926,
          "rotation": 18.84955592153877,
          "target": "2-revo"
        },
        {
          "yaw": -1.7345656056278962,
          "pitch": 0.2976879437543616,
          "rotation": 0,
          "target": "0-3-doors"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-revo",
      "name": "REVO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 1.1512904613977248,
        "pitch": 0.005332178761378259,
        "fov": 2.443460952792061
      },
      "linkHotspots": [
        {
          "yaw": -2.0629222693954645,
          "pitch": 0.03091774913652756,
          "rotation": 0,
          "target": "3-daitan"
        },
        {
          "yaw": 0.03806007703860281,
          "pitch": 0.13228863854175543,
          "rotation": 0,
          "target": "1-testing"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-daitan",
      "name": "DAITAN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -1.7353922841505565,
        "pitch": -0.003586292983547068,
        "fov": 2.443460952792061
      },
      "linkHotspots": [
        {
          "yaw": -1.619497813058814,
          "pitch": 0.050810823465500476,
          "rotation": 0,
          "target": "4-daitan-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-daitan-2",
      "name": "DAITAN 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -1.7384000568974365,
        "pitch": -0.00024804735279815304,
        "fov": 2.443460952792061
      },
      "linkHotspots": [
        {
          "yaw": 1.44314128916524,
          "pitch": 0.043170790452649044,
          "rotation": 0,
          "target": "2-revo"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "SHOWROOM ALP",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
