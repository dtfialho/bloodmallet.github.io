Highcharts.chart('shaman_elemental_beastlord', 
{
    chart: {
        type: "bar"
    },
    legend: {
        align: "right",
        backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
        borderColor: "#CCC",
        borderWidth: 1,
        floating: false,
        reversed: true,
        shadow: false,
        verticalAlign: "bottom",
        x: 0,
        y: 0
    },
    plotOptions: {
        bar: {
            dataLabels: {
                color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                enabled: false
            },
            stacking: "normal"
        },
        series: {
            borderColor: "#151515",
            events: {
                legendItemClick: function() { return false; }
            }
        }
    },
    series: [
        {
            color: "#ffeb3b",
            data: [
                304512,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ],
            name: "970"
        },
        {
            color: "#00E676",
            data: [
                0,
                17366,
                9961,
                17764,
                17732,
                13353,
                8722,
                16470,
                19601,
                12754,
                9380,
                13529,
                9259,
                15706,
                11909,
                11416,
                17882,
                17593,
                14695,
                0,
                9872,
                8920,
                11652,
                12922,
                11827,
                10024,
                7451,
                11468,
                12158,
                7282,
                2677,
                6917,
                9700,
                1650,
                0,
                4866,
                0,
                5367,
                10786,
                1647,
                3245,
                0,
                1849,
                0,
                2594
            ],
            name: "940"
        },
        {
            color: "#db843d",
            data: [
                0,
                18511,
                10992,
                10406,
                11920,
                3418,
                12094,
                18182,
                17286,
                16932,
                7935,
                17531,
                14898,
                17432,
                8840,
                15318,
                10984,
                13839,
                14278,
                0,
                12379,
                11378,
                6191,
                8577,
                3505,
                11407,
                7268,
                14889,
                5685,
                0,
                6571,
                3275,
                15445,
                3480,
                0,
                10116,
                10268,
                6199,
                3999,
                5542,
                8482,
                6457,
                3889,
                851,
                5544
            ],
            name: "930"
        },
        {
            color: "#4198af",
            data: [
                0,
                16812,
                10427,
                12891,
                11400,
                12620,
                8968,
                7049,
                16495,
                14513,
                16019,
                6755,
                16497,
                12330,
                15551,
                9874,
                10947,
                1657,
                5016,
                0,
                4012,
                8981,
                10883,
                13589,
                5777,
                14544,
                13562,
                1894,
                3536,
                813,
                13115,
                8922,
                2349,
                8877,
                0,
                6126,
                6091,
                3006,
                8507,
                834,
                9772,
                0,
                0,
                11530,
                3356
            ],
            name: "920"
        },
        {
            color: "#71588f",
            data: [
                0,
                12003,
                4286,
                12919,
                18956,
                7284,
                12789,
                10114,
                9838,
                7119,
                8256,
                10278,
                11255,
                6420,
                7365,
                6420,
                12031,
                8665,
                6992,
                0,
                12468,
                9092,
                7232,
                4231,
                9433,
                12588,
                3598,
                17343,
                16111,
                5570,
                3022,
                5985,
                14608,
                4584,
                0,
                0,
                2486,
                0,
                4355,
                11994,
                152,
                3898,
                6402,
                0,
                0
            ],
            name: "910"
        },
        {
            color: "#89a54e",
            data: [
                0,
                11530,
                5103,
                166497,
                296,
                8354,
                6938,
                8763,
                6480,
                8729,
                13507,
                10700,
                4858,
                15888,
                13266,
                6258,
                1970,
                9628,
                11346,
                7422,
                11581,
                10417,
                7469,
                7980,
                9162,
                7255,
                1119,
                7284,
                3114,
                8378,
                5164,
                8458,
                4039,
                5098,
                7442,
                12696,
                1182,
                6141,
                682,
                5819,
                3761,
                5500,
                1691,
                3931,
                18196
            ],
            name: "900"
        },
        {
            color: "#aa4643",
            data: [
                0,
                161722,
                6373,
                0,
                15235,
                10164,
                11105,
                133206,
                15050,
                12657,
                5606,
                10231,
                7535,
                9973,
                5301,
                11163,
                6236,
                10216,
                4103,
                11205,
                3685,
                7688,
                109270,
                5680,
                6816,
                8161,
                14275,
                11874,
                8364,
                12605,
                723,
                88200,
                2264,
                6508,
                5964,
                0,
                10485,
                1090,
                4721,
                7393,
                7582,
                1449,
                9633,
                2613,
                0
            ],
            name: "890"
        },
        {
            color: "#4572a7",
            data: [
                0,
                0,
                189109,
                0,
                134416,
                144609,
                134450,
                0,
                107878,
                118986,
                128300,
                116162,
                119971,
                105146,
                117936,
                113734,
                113728,
                107338,
                107289,
                141737,
                105147,
                100887,
                0,
                96264,
                102217,
                81837,
                97827,
                80056,
                91373,
                100047,
                96760,
                0,
                72898,
                90009,
                103952,
                81238,
                78092,
                85777,
                73030,
                66493,
                63743,
                70493,
                62471,
                49293,
                47912
            ],
            name: "880"
        }
    ],
    subtitle: {
        text: "Last generated: 2017-08-07 10:39:20"
    },
    title: {
        text: "Shaman - Elemental - Beastlord"
    },
    tooltip: {
        backgroundColor: "#eee",
        borderColor: "#bbb",
        formatter: function() {        var s = '<b>'+ this.x +'</b>';        var cumulative_amount = 0;        for (var i = this.points.length - 1 ; i >= 0 ; i--) {            cumulative_amount += this.points[i].y;            if (this.points[i].y !== 0){                s += '<br/><span style=\"color: ' + this.points[i].series.color + '; font-weight: bold;\">' + this.points[i].series.name +'</span>: ' + cumulative_amount;            }        }        return s;      },
        headerFormat: "<b>{point.x}</b>",
        shared: true,
        style: {
            color: "black"
        }
    },
    xAxis: {
        categories: [
            "Kil'jaeden's Burning Wish",
            "Spectral Thurible",
            "Unstable Arcano Crystal",
            "Tome of Unraveling Sanity",
            "Stat Stick (Crit)",
            "Whispers in the Dark",
            "Icon of Rot",
            "Charm of the Rising Tide",
            "Star Gate",
            "Dreadstone of Endless Shadows",
            "Infernal Writ",
            "Erratic Metronome",
            "Padawsen's Unlucky Charm",
            "Deteriorated Construct Core",
            "Stat Stick (Haste)",
            "Chrono Shard",
            "Stat Stick (Mastery)",
            "Aran's Relaxing Ruby",
            "PVP Badge of Dominance",
            "Darkmoon Deck: Hellfire",
            "Fury of the Burning Sky",
            "Stormsinger Fulmination Charge",
            "Terror From Below",
            "PVP Insignia of Dominance",
            "Eye of Skovald",
            "Bough of Corruption",
            "Horn of Valor",
            "Twisting Wind",
            "Moonlit Prism",
            "Unstable Horrorslime",
            "Elementium Bomb Squirrel Generator",
            "Tarnished Sentinel Medallion",
            "Portable Manacracker",
            "Devilsaur Shock-Baton",
            "Infernal Alchemist Stone",
            "Obelisk of the Void",
            "Mrrgria's Favor",
            "Wriggling Sinew",
            "Caged Horror",
            "Corrupted Starlight",
            "Swarming Plaguehive",
            "Figurehead of the Naglfar",
            "Oakheart's Gnarled Root",
            "Pharameres Forbidden Grimoire",
            "Naraxas' Spiked Tongue"
        ]
    },
    yAxis: {
        labels: {
            enabled: true
        },
        min: 0,
        stackLabels: {
            enabled: false,
            style: {
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'white',
                fontWeight: "bold"
            }
        },
        title: {
            text: "\u0394 Damage per second"
        }
    }
});