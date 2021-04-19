{
    "name": "server-deployment-practice",
    "version": "1.0.0",
    "lockfileVersion": 1,
    "requires": true,
    "dependencies": {
        "@babel/code-frame": {
            "version": "7.12.13",
            "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.12.13.tgz",
            "integrity": "sha512-HV1Cm0Q3ZrpCR93tkWOYiuYIgLxZXZFVG2VgK+MBWjUqZTundupbfx2aXarXuw5Ko5aMcjtJgbSs4vUGBS5v6g==",
            "requires": {
                "@babel/highlight": "^7.12.13"
            }
        },
        "@babel/compat-data": {
            "version": "7.13.15",
            "resolved": "https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.13.15.tgz",
            "integrity": "sha512-ltnibHKR1VnrU4ymHyQ/CXtNXI6yZC0oJThyW78Hft8XndANwi+9H+UIklBDraIjFEJzw8wmcM427oDd9KS5wA=="
        },
        "@babel/core": {
            "version": "7.13.15",
            "resolved": "https://registry.npmjs.org/@babel/core/-/core-7.13.15.tgz",
            "integrity": "sha512-6GXmNYeNjS2Uz+uls5jalOemgIhnTMeaXo+yBUA72kC2uX/8VW6XyhVIo2L8/q0goKQA3EVKx0KOQpVKSeWadQ==",
            "requires": {
                "@babel/code-frame": "^7.12.13",
                "@babel/generator": "^7.13.9",
                "@babel/helper-compilation-targets": "^7.13.13",
                "@babel/helper-module-transforms": "^7.13.14",
                "@babel/helpers": "^7.13.10",
                "@babel/parser": "^7.13.15",
                "@babel/template": "^7.12.13",
                "@babel/traverse": "^7.13.15",
                "@babel/types": "^7.13.14",
                "convert-source-map": "^1.7.0",
                "debug": "^4.1.0",
                "gensync": "^1.0.0-beta.2",
                "json5": "^2.1.2",
                "semver": "^6.3.0",
                "source-map": "^0.5.0"
            },
            "dependencies": {
                "debug": {
                    "version": "4.3.1",
                    "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.1.tgz",
                    "integrity": "sha512-doEwdvm4PCeK4K3RQN2ZC2BYUBaxwLARCqZmMjtF8a51J2Rb0xpVloFRnCODwqjpwnAoao4pelN8l3RJdv3gRQ==",
                    "requires": {
                        "ms": "2.1.2"
                    }
                },
                "ms": {
                    "version": "2.1.2",
                    "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
                    "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w=="
                },
                "source-map": {
                    "version": "0.5.7",
                    "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.5.7.tgz",
                    "integrity": "sha1-igOdLRAh0i0eoUyA2OpGi6LvP8w="
                }
            }
        },
        "@babel/generator": {
            "version": "7.13.9",
            "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.13.9.tgz",
            "integrity": "sha512-mHOOmY0Axl/JCTkxTU6Lf5sWOg/v8nUa+Xkt4zMTftX0wqmb6Sh7J8gvcehBw7q0AhrhAR+FDacKjCZ2X8K+Sw==",
            "requires": {
                "@babel/types": "^7.13.0",
                "jsesc": "^2.5.1",
                "source-map": "^0.5.0"
            },
            "dependencies": {
                "source-map": {
                    "version": "0.5.7",
                    "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.5.7.tgz",
                    "integrity": "sha1-igOdLRAh0i0eoUyA2OpGi6LvP8w="
                }
            }
        },
        "@babel/helper-compilation-targets": {
            "version": "7.13.13",
            "resolved": "https://registry.npmjs.org/@babel/helper-compilation-targets/-/helper-compilation-targets-7.13.13.tgz",
            "integrity": "sha512-q1kcdHNZehBwD9jYPh3WyXcsFERi39X4I59I3NadciWtNDyZ6x+GboOxncFK0kXlKIv6BJm5acncehXWUjWQMQ==",
            "requires": {
                "@babel/compat-data": "^7.13.12",
                "@babel/helper-validator-option": "^7.12.17",
                "browserslist": "^4.14.5",
                "semver": "^6.3.0"
            }
        },
        "@babel/helper-function-name": {
            "version": "7.12.13",
            "resolved": "https://registry.npmjs.org/@babel/helper-function-name/-/helper-function-name-7.12.13.tgz",
            "integrity": "sha512-TZvmPn0UOqmvi5G4vvw0qZTpVptGkB1GL61R6lKvrSdIxGm5Pky7Q3fpKiIkQCAtRCBUwB0PaThlx9vebCDSwA==",
            "requires": {
                "@babel/helper-get-function-arity": "^7.12.13",
                "@babel/template": "^7.12.13",
                "@babel/types": "^7.12.13"
            }
        },
        "@babel/helper-get-function-arity": {
            "version": "7.12.13",
            "resolved": "https://registry.npmjs.org/@babel/helper-get-function-arity/-/helper-get-function-arity-7.12.13.tgz",
            "integrity": "sha512-DjEVzQNz5LICkzN0REdpD5prGoidvbdYk1BVgRUOINaWJP2t6avB27X1guXK1kXNrX0WMfsrm1A/ZBthYuIMQg==",
            "requires": {
                "@babel/types": "^7.12.13"
            }
        },
        "@babel/helper-member-expression-to-functions": {
            "version": "7.13.12",
            "resolved": "https://registry.npmjs.org/@babel/helper-member-expression-to-functions/-/helper-member-expression-to-functions-7.13.12.tgz",
            "integrity": "sha512-48ql1CLL59aKbU94Y88Xgb2VFy7a95ykGRbJJaaVv+LX5U8wFpLfiGXJJGUozsmA1oEh/o5Bp60Voq7ACyA/Sw==",
            "requires": {
                "@babel/types": "^7.13.12"
            }
        },
        "@babel/helper-module-imports": {
            "version": "7.13.12",
            "resolved": "https://registry.npmjs.org/@babel/helper-module-imports/-/helper-module-imports-7.13.12.tgz",
            "integrity": "sha512-4cVvR2/1B693IuOvSI20xqqa/+bl7lqAMR59R4iu39R9aOX8/JoYY1sFaNvUMyMBGnHdwvJgUrzNLoUZxXypxA==",
            "requires": {
                "@babel/types": "^7.13.12"
            }
        },
        "@babel/helper-module-transforms": {
            "version": "7.13.14",
            "resolved": "https://registry.npmjs.org/@babel/helper-module-transforms/-/helper-module-transforms-7.13.14.tgz",
            "integrity": "sha512-QuU/OJ0iAOSIatyVZmfqB0lbkVP0kDRiKj34xy+QNsnVZi/PA6BoSoreeqnxxa9EHFAIL0R9XOaAR/G9WlIy5g==",
            "requires": {
                "@babel/helper-module-imports": "^7.13.12",
                "@babel/helper-replace-supers": "^7.13.12",
                "@babel/helper-simple-access": "^7.13.12",
                "@babel/helper-split-export-declaration": "^7.12.13",
                "@babel/helper-validator-identifier": "^7.12.11",
                "@babel/template": "^7.12.13",
                "@babel/traverse": "^7.13.13",
                "@babel/types": "^7.13.14"
            }
        },
        "@babel/helper-optimise-call-expression": {
            "version": "7.12.13",
            "resolved": "https://registry.npmjs.org/@babel/helper-optimise-call-expression/-/helper-optimise-call-expression-7.12.13.tgz",
            "integrity": "sha512-BdWQhoVJkp6nVjB7nkFWcn43dkprYauqtk++Py2eaf/GRDFm5BxRqEIZCiHlZUGAVmtwKcsVL1dC68WmzeFmiA==",
            "requires": {
                "@babel/types": "^7.12.13"
            }
        },
        "@babel/helper-plugin-utils": {
            "version": "7.13.0",
            "resolved": "https://registry.npmjs.org/@babel/helper-plugin-utils/-/helper-plugin-utils-7.13.0.tgz",
            "integrity": "sha512-ZPafIPSwzUlAoWT8DKs1W2VyF2gOWthGd5NGFMsBcMMol+ZhK+EQY/e6V96poa6PA/Bh+C9plWN0hXO1uB8AfQ=="
        },
        "@babel/helper-replace-supers": {
            "version": "7.13.12",
            "resolved": "https://registry.npmjs.org/@babel/helper-replace-supers/-/helper-replace-supers-7.13.12.tgz",
            "integrity": "sha512-Gz1eiX+4yDO8mT+heB94aLVNCL+rbuT2xy4YfyNqu8F+OI6vMvJK891qGBTqL9Uc8wxEvRW92Id6G7sDen3fFw==",
            "requires": {
                "@babel/helper-member-expression-to-functions": "^7.13.12",
                "@babel/helper-optimise-call-expression": "^7.12.13",
                "@babel/traverse": "^7.13.0",
                "@babel/types": "^7.13.12"
            }
        },
        "@babel/helper-simple-access": {
            "version": "7.13.12",
            "resolved": "https://registry.npmjs.org/@babel/helper-simple-access/-/helper-simple-access-7.13.12.tgz",
            "integrity": "sha512-7FEjbrx5SL9cWvXioDbnlYTppcZGuCY6ow3/D5vMggb2Ywgu4dMrpTJX0JdQAIcRRUElOIxF3yEooa9gUb9ZbA==",
            "requires": {
                "@babel/types": "^7.13.12"
            }
        },
        "@babel/helper-split-export-declaration": {
            "version": "7.12.13",
            "resolved": "https://registry.npmjs.org/@babel/helper-split-export-declaration/-/helper-split-export-declaration-7.12.13.tgz",
            "integrity": "sha512-tCJDltF83htUtXx5NLcaDqRmknv652ZWCHyoTETf1CXYJdPC7nohZohjUgieXhv0hTJdRf2FjDueFehdNucpzg==",
            "requires": {
                "@babel/types": "^7.12.13"
            }
        },
        "@babel/helper-validator-identifier": {
            "version": "7.12.11",
            "resolved": "https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.12.11.tgz",
            "integrity": "sha512-np/lG3uARFybkoHokJUmf1QfEvRVCPbmQeUQpKow5cQ3xWrV9i3rUHodKDJPQfTVX61qKi+UdYk8kik84n7XOw=="
        },
        "@babel/helper-validator-option": {
            "version": "7.12.17",
            "resolved": "https://registry.npmjs.org/@babel/helper-validator-option/-/helper-validator-option-7.12.17.tgz",
            "integrity": "sha512-TopkMDmLzq8ngChwRlyjR6raKD6gMSae4JdYDB8bByKreQgG0RBTuKe9LRxW3wFtUnjxOPRKBDwEH6Mg5KeDfw=="
        },
        "@babel/helpers": {
            "version": "7.13.10",
            "resolved": "https://registry.npmjs.org/@babel/helpers/-/helpers-7.13.10.tgz",
            "integrity": "sha512-4VO883+MWPDUVRF3PhiLBUFHoX/bsLTGFpFK/HqvvfBZz2D57u9XzPVNFVBTc0PW/CWR9BXTOKt8NF4DInUHcQ==",
            "requires": {
                "@babel/template": "^7.12.13",
                "@babel/traverse": "^7.13.0",
                "@babel/types": "^7.13.0"
            }
        },
        "@babel/highlight": {
            "version": "7.13.10",
            "resolved": "https://registry.npmjs.org/@babel/highlight/-/highlight-7.13.10.tgz",
            "integrity": "sha512-5aPpe5XQPzflQrFwL1/QoeHkP2MsA4JCntcXHRhEsdsfPVkvPi2w7Qix4iV7t5S/oC9OodGrggd8aco1g3SZFg==",
            "requires": {
                "@babel/helper-validator-identifier": "^7.12.11",
                "chalk": "^2.0.0",
                "js-tokens": "^4.0.0"
            },
            "dependencies": {
                "ansi-styles": {
                    "version": "3.2.1",
                    "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
                    "integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",
                    "requires": {
                        "color-convert": "^1.9.0"
                    }
                },
                "chalk": {
                    "version": "2.4.2",
                    "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz",
                    "integrity": "sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ==",
                    "requires": {
                        "ansi-styles": "^3.2.1",
                        "escape-string-regexp": "^1.0.5",
                        "supports-color": "^5.3.0"
                    }
                },
                "color-convert": {
                    "version": "1.9.3",
                    "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",
                    "integrity": "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==",
                    "requires": {
                        "color-name": "1.1.3"
                    }
                },
                "color-name": {
                    "version": "1.1.3",
                    "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",
                    "integrity": "sha1-p9BVi9icQveV3UIyj3QIMcpTvCU="
                },
                "has-flag": {
                    "version": "3.0.0",
                    "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz",
                    "integrity": "sha1-tdRU3CGZriJWmfNGfloH87lVuv0="
                },
                "supports-color": {
                    "version": "5.5.0",
                    "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz",
                    "integrity": "sha512-QjVjwdXIt408MIiAqCX4oUKsgU2EqAGzs2Ppkm4aQYbjm+ZEWEcW4SfFNTr4uMNZma0ey4f5lgLrkB0aX0QMow==",
                    "requires": {
                        "has-flag": "^3.0.0"
                    }
                }
            }
        },
        "@babel/parser": {
            "version": "7.13.15",
            "resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.13.15.tgz",
            "integrity": "sha512-b9COtcAlVEQljy/9fbcMHpG+UIW9ReF+gpaxDHTlZd0c6/UU9ng8zdySAW9sRTzpvcdCHn6bUcbuYUgGzLAWVQ=="
        },
        "@babel/plugin-syntax-async-generators": {
            "version": "7.8.4",
            "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-async-generators/-/plugin-syntax-async-generators-7.8.4.tgz",
            "integrity": "sha512-tycmZxkGfZaxhMRbXlPXuVFpdWlXpir2W4AMhSJgRKzk/eDlIXOhb2LHWoLpDF7TEHylV5zNhykX6KAgHJmTNw==",
            "requires": {
                "@babel/helper-plugin-utils": "^7.8.0"
            }
        },
        "@babel/plugin-syntax-bigint": {
            "version": "7.8.3",
            "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-bigint/-/plugin-syntax-bigint-7.8.3.tgz",
            "integrity": "sha512-wnTnFlG+YxQm3vDxpGE57Pj0srRU4sHE/mDkt1qv2YJJSeUAec2ma4WLUnUPeKjyrfntVwe/N6dCXpU+zL3Npg==",
            "requires": {
                "@babel/helper-plugin-utils": "^7.8.0"
            }
        },
        "@babel/plugin-syntax-class-properties": {
            "version": "7.12.13",
            "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-class-properties/-/plugin-syntax-class-properties-7.12.13.tgz",
            "integrity": "sha512-fm4idjKla0YahUNgFNLCB0qySdsoPiZP3iQE3rky0mBUtMZ23yDJ9SJdg6dXTSDnulOVqiF3Hgr9nbXvXTQZYA==",
            "requires": {
                "@babel/helper-plugin-utils": "^7.12.13"
            }
        },
        "@babel/plugin-syntax-import-meta": {
            "version": "7.10.4",
            "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-import-meta/-/plugin-syntax-import-meta-7.10.4.tgz",
            "integrity": "sha512-Yqfm+XDx0+Prh3VSeEQCPU81yC+JWZ2pDPFSS4ZdpfZhp4MkFMaDC1UqseovEKwSUpnIL7+vK+Clp7bfh0iD7g==",
            "requires": {
                "@babel/helper-plugin-utils": "^7.10.4"
            }
        },
        "@babel/plugin-syntax-json-strings": {
            "version": "7.8.3",
            "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-json-strings/-/plugin-syntax-json-strings-7.8.3.tgz",
            "integrity": "sha512-lY6kdGpWHvjoe2vk4WrAapEuBR69EMxZl+RoGRhrFGNYVK8mOPAW8VfbT/ZgrFbXlDNiiaxQnAtgVCZ6jv30EA==",
            "requires": {
                "@babel/helper-plugin-utils": "^7.8.0"
            }
        },
        "@babel/plugin-syntax-logical-assignment-operators": {
            "version": "7.10.4",
            "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-logical-assignment-operators/-/plugin-syntax-logical-assignment-operators-7.10.4.tgz",
            "integrity": "sha512-d8waShlpFDinQ5MtvGU9xDAOzKH47+FFoney2baFIoMr952hKOLp1HR7VszoZvOsV/4+RRszNY7D17ba0te0ig==",
            "requires": {
                "@babel/helper-plugin-utils": "^7.10.4"
            }
        },
        "@babel/plugin-syntax-nullish-coalescing-operator": {
            "version": "7.8.3",
            "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-nullish-coalescing-operator/-/plugin-syntax-nullish-coalescing-operator-7.8.3.tgz",
            "integrity": "sha512-aSff4zPII1u2QD7y+F8oDsz19ew4IGEJg9SVW+bqwpwtfFleiQDMdzA/R+UlWDzfnHFCxxleFT0PMIrR36XLNQ==",
            "requires": {
                "@babel/helper-plugin-utils": "^7.8.0"
            }
        },
        "@babel/plugin-syntax-numeric-separator": {
            "version": "7.10.4",
            "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-numeric-separator/-/plugin-syntax-numeric-separator-7.10.4.tgz",
            "integrity": "sha512-9H6YdfkcK/uOnY/K7/aA2xpzaAgkQn37yzWUMRK7OaPOqOpGS1+n0H5hxT9AUw9EsSjPW8SVyMJwYRtWs3X3ug==",
            "requires": {
                "@babel/helper-plugin-utils": "^7.10.4"
            }
        },
        "@babel/plugin-syntax-object-rest-spread": {
            "version": "7.8.3",
            "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-object-rest-spread/-/plugin-syntax-object-rest-spread-7.8.3.tgz",
            "integrity": "sha512-XoqMijGZb9y3y2XskN+P1wUGiVwWZ5JmoDRwx5+3GmEplNyVM2s2Dg8ILFQm8rWM48orGy5YpI5Bl8U1y7ydlA==",
            "requires": {
                "@babel/helper-plugin-utils": "^7.8.0"
            }
        },
        "@babel/plugin-syntax-optional-catch-binding": {
            "version": "7.8.3",
            "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-optional-catch-binding/-/plugin-syntax-optional-catch-binding-7.8.3.tgz",
            "integrity": "sha512-6VPD0Pc1lpTqw0aKoeRTMiB+kWhAoT24PA+ksWSBrFtl5SIRVpZlwN3NNPQjehA2E/91FV3RjLWoVTglWcSV3Q==",
            "requires": {
                "@babel/helper-plugin-utils": "^7.8.0"
            }
        },
        "@babel/plugin-syntax-optional-chaining": {
            "version": "7.8.3",
            "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-optional-chaining/-/plugin-syntax-optional-chaining-7.8.3.tgz",
            "integrity": "sha512-KoK9ErH1MBlCPxV0VANkXW2/dw4vlbGDrFgz8bmUsBGYkFRcbRwMh6cIJubdPrkxRwuGdtCk0v/wPTKbQgBjkg==",
            "requires": {
                "@babel/helper-plugin-utils": "^7.8.0"
            }
        },
        "@babel/plugin-syntax-top-level-await": {
            "version": "7.12.13",
            "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-top-level-await/-/plugin-syntax-top-level-await-7.12.13.tgz",
            "integrity": "sha512-A81F9pDwyS7yM//KwbCSDqy3Uj4NMIurtplxphWxoYtNPov7cJsDkAFNNyVlIZ3jwGycVsurZ+LtOA8gZ376iQ==",
            "requires": {
                "@babel/helper-plugin-utils": "^7.12.13"
            }
        },
        "@babel/template": {
            "version": "7.12.13",
            "resolved": "https://registry.npmjs.org/@babel/template/-/template-7.12.13.tgz",
            "integrity": "sha512-/7xxiGA57xMo/P2GVvdEumr8ONhFOhfgq2ihK3h1e6THqzTAkHbkXgB0xI9yeTfIUoH3+oAeHhqm/I43OTbbjA==",
            "requires": {
                "@babel/code-frame": "^7.12.13",
                "@babel/parser": "^7.12.13",
                "@babel/types": "^7.12.13"
            }
        },
        "@babel/traverse": {
            "version": "7.13.15",
            "resolved": "https://registry.npmjs.org/@babel/traverse/-/traverse-7.13.15.tgz",
            "integrity": "sha512-/mpZMNvj6bce59Qzl09fHEs8Bt8NnpEDQYleHUPZQ3wXUMvXi+HJPLars68oAbmp839fGoOkv2pSL2z9ajCIaQ==",
            "requires": {
                "@babel/code-frame": "^7.12.13",
                "@babel/generator": "^7.13.9",
                "@babel/helper-function-name": "^7.12.13",
                "@babel/helper-split-export-declaration": "^7.12.13",
                "@babel/parser": "^7.13.15",
                "@babel/types": "^7.13.14",
                "debug": "^4.1.0",
                "globals": "^11.1.0"
            },
            "dependencies": {
                "debug": {
                    "version": "4.3.1",
                    "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.1.tgz",
                    "integrity": "sha512-doEwdvm4PCeK4K3RQN2ZC2BYUBaxwLARCqZmMjtF8a51J2Rb0xpVloFRnCODwqjpwnAoao4pelN8l3RJdv3gRQ==",
                    "requires": {
                        "ms": "2.1.2"
                    }
                },
                "ms": {
                    "version": "2.1.2",
                    "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
                    "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w=="
                }
            }
        },
        "@babel/types": {
            "version": "7.13.14",
            "resolved": "https://registry.npmjs.org/@babel/types/-/types-7.13.14.tgz",
            "integrity": "sha512-A2aa3QTkWoyqsZZFl56MLUsfmh7O0gN41IPvXAE/++8ojpbz12SszD7JEGYVdn4f9Kt4amIei07swF1h4AqmmQ==",
            "requires": {
                "@babel/helper-validator-identifier": "^7.12.11",
                "lodash": "^4.17.19",
                "to-fast-properties": "^2.0.0"
            }
        },
        "@bcoe/v8-coverage": {
            "version": "0.2.3",
            "resolved": "https://registry.npmjs.org/@bcoe/v8-coverage/-/v8-coverage-0.2.3.tgz",
            "integrity": "sha512-0hYQ8SB4Db5zvZB4axdMHGwEaQjkZzFjQiN9LVYvIFB2nSUHW9tYpxWriPrWDASIxiaXax83REcLxuSdnGPZtw=="
        },
        "@cnakazawa/watch": {
            "version": "1.0.4",
            "resolved": "https://registry.npmjs.org/@cnakazawa/watch/-/watch-1.0.4.tgz",
            "integrity": "sha512-v9kIhKwjeZThiWrLmj0y17CWoyddASLj9O2yvbZkbvw/N3rWOYy9zkV66ursAoVr0mV15bL8g0c4QZUE6cdDoQ==",
            "requires": {
                "exec-sh": "^0.3.2",
                "minimist": "^1.2.0"
            }
        },
        "@istanbuljs/load-nyc-config": {
            "version": "1.1.0",
            "resolved": "https://registry.npmjs.org/@istanbuljs/load-nyc-config/-/load-nyc-config-1.1.0.tgz",
            "integrity": "sha512-VjeHSlIzpv/NyD3N0YuHfXOPDIixcA1q2ZV98wsMqcYlPmv2n3Yb2lYP9XMElnaFVXg5A7YLTeLu6V84uQDjmQ==",
            "requires": {
                "camelcase": "^5.3.1",
                "find-up": "^4.1.0",
                "get-package-type": "^0.1.0",
                "js-yaml": "^3.13.1",
                "resolve-from": "^5.0.0"
            }
        },
        "@istanbuljs/schema": {
            "version": "0.1.3",
            "resolved": "https://registry.npmjs.org/@istanbuljs/schema/-/schema-0.1.3.tgz",
            "integrity": "sha512-ZXRY4jNvVgSVQ8DL3LTcakaAtXwTVUxE81hslsyD2AtoXW/wVob10HkOJ1X/pAlcI7D+2YoZKg5do8G/w6RYgA=="
        },
        "@jest/console": {
            "version": "26.6.2",
            "resolved": "https://registry.npmjs.org/@jest/console/-/console-26.6.2.tgz",
            "integrity": "sha512-IY1R2i2aLsLr7Id3S6p2BA82GNWryt4oSvEXLAKc+L2zdi89dSkE8xC1C+0kpATG4JhBJREnQOH7/zmccM2B0g==",
            "requires": {
                "@jest/types": "^26.6.2",
                "@types/node": "*",
                "chalk": "^4.0.0",
                "jest-message-util": "^26.6.2",
                "jest-util": "^26.6.2",
                "slash": "^3.0.0"
            }
        },
        "@jest/core": {
            "version": "26.6.3",
            "resolved": "https://registry.npmjs.org/@jest/core/-/core-26.6.3.tgz",
            "integrity": "sha512-xvV1kKbhfUqFVuZ8Cyo+JPpipAHHAV3kcDBftiduK8EICXmTFddryy3P7NfZt8Pv37rA9nEJBKCCkglCPt/Xjw==",
            "requires": {
                "@jest/console": "^26.6.2",
                "@jest/reporters": "^26.6.2",
                "@jest/test-result": "^26.6.2",
                "@jest/transform": "^26.6.2",
                "@jest/types": "^26.6.2",
                "@types/node": "*",
                "ansi-escapes": "^4.2.1",
                "chalk": "^4.0.0",
                "exit": "^0.1.2",
                "graceful-fs": "^4.2.4",
                "jest-changed-files": "^26.6.2",
                "jest-config": "^26.6.3",
                "jest-haste-map": "^26.6.2",
                "jest-message-util": "^26.6.2",
                "jest-regex-util": "^26.0.0",
                "jest-resolve": "^26.6.2",
                "jest-resolve-dependencies": "^26.6.3",
                "jest-runner": "^26.6.3",
                "jest-runtime": "^26.6.3",
                "jest-snapshot": "^26.6.2",
                "jest-util": "^26.6.2",
                "jest-validate": "^26.6.2",
                "jest-watcher": "^26.6.2",
                "micromatch": "^4.0.2",
                "p-each-series": "^2.1.0",
                "rimraf": "^3.0.0",
                "slash": "^3.0.0",
                "strip-ansi": "^6.0.0"
            }
        },
        "@jest/environment": {
            "version": "26.6.2",
            "resolved": "https://registry.npmjs.org/@jest/environment/-/environment-26.6.2.tgz",
            "integrity": "sha512-nFy+fHl28zUrRsCeMB61VDThV1pVTtlEokBRgqPrcT1JNq4yRNIyTHfyht6PqtUvY9IsuLGTrbG8kPXjSZIZwA==",
            "requires": {
                "@jest/fake-timers": "^26.6.2",
                "@jest/types": "^26.6.2",
                "@types/node": "*",
                "jest-mock": "^26.6.2"
            }
        },
        "@jest/fake-timers": {
            "version": "26.6.2",
            "resolved": "https://registry.npmjs.org/@jest/fake-timers/-/fake-timers-26.6.2.tgz",
            "integrity": "sha512-14Uleatt7jdzefLPYM3KLcnUl1ZNikaKq34enpb5XG9i81JpppDb5muZvonvKyrl7ftEHkKS5L5/eB/kxJ+bvA==",
            "requires": {
                "@jest/types": "^26.6.2",
                "@sinonjs/fake-timers": "^6.0.1",
                "@types/node": "*",
                "jest-message-util": "^26.6.2",
                "jest-mock": "^26.6.2",
                "jest-util": "^26.6.2"
            }
        },
        "@jest/globals": {
            "version": "26.6.2",
            "resolved": "https://registry.npmjs.org/@jest/globals/-/globals-26.6.2.tgz",
            "integrity": "sha512-85Ltnm7HlB/KesBUuALwQ68YTU72w9H2xW9FjZ1eL1U3lhtefjjl5c2MiUbpXt/i6LaPRvoOFJ22yCBSfQ0JIA==",
            "requires": {
                "@jest/environment": "^26.6.2",
                "@jest/types": "^26.6.2",
                "expect": "^26.6.2"
            }
        },
        "@jest/reporters": {
            "version": "26.6.2",
            "resolved": "https://registry.npmjs.org/@jest/reporters/-/reporters-26.6.2.tgz",
            "integrity": "sha512-h2bW53APG4HvkOnVMo8q3QXa6pcaNt1HkwVsOPMBV6LD/q9oSpxNSYZQYkAnjdMjrJ86UuYeLo+aEZClV6opnw==",
            "requires": {
                "@bcoe/v8-coverage": "^0.2.3",
                "@jest/console": "^26.6.2",
                "@jest/test-result": "^26.6.2",
                "@jest/transform": "^26.6.2",
                "@jest/types": "^26.6.2",
                "chalk": "^4.0.0",
                "collect-v8-coverage": "^1.0.0",
                "exit": "^0.1.2",
                "glob": "^7.1.2",
                "graceful-fs": "^4.2.4",
                "istanbul-lib-coverage": "^3.0.0",
                "istanbul-lib-instrument": "^4.0.3",
                "istanbul-lib-report": "^3.0.0",
                "istanbul-lib-source-maps": "^4.0.0",
                "istanbul-reports": "^3.0.2",
                "jest-haste-map": "^26.6.2",
                "jest-resolve": "^26.6.2",
                "jest-util": "^26.6.2",
                "jest-worker": "^26.6.2",
                "node-notifier": "^8.0.0",
                "slash": "^3.0.0",
                "source-map": "^0.6.0",
                "string-length": "^4.0.1",
                "terminal-link": "^2.0.0",
                "v8-to-istanbul": "^7.0.0"
            }
        },
        "@jest/source-map": {
            "version": "26.6.2",
            "resolved": "https://registry.npmjs.org/@jest/source-map/-/source-map-26.6.2.tgz",
            "integrity": "sha512-YwYcCwAnNmOVsZ8mr3GfnzdXDAl4LaenZP5z+G0c8bzC9/dugL8zRmxZzdoTl4IaS3CryS1uWnROLPFmb6lVvA==",
            "requires": {
                "callsites": "^3.0.0",
                "graceful-fs": "^4.2.4",
                "source-map": "^0.6.0"
            }
        },
        "@jest/test-result": {
            "version": "26.6.2",
            "resolved": "https://registry.npmjs.org/@jest/test-result/-/test-result-26.6.2.tgz",
            "integrity": "sha512-5O7H5c/7YlojphYNrK02LlDIV2GNPYisKwHm2QTKjNZeEzezCbwYs9swJySv2UfPMyZ0VdsmMv7jIlD/IKYQpQ==",
            "requires": {
                "@jest/console": "^26.6.2",
                "@jest/types": "^26.6.2",
                "@types/istanbul-lib-coverage": "^2.0.0",
                "collect-v8-coverage": "^1.0.0"
            }
        },
        "@jest/test-sequencer": {
            "version": "26.6.3",
            "resolved": "https://registry.npmjs.org/@jest/test-sequencer/-/test-sequencer-26.6.3.tgz",
            "integrity": "sha512-YHlVIjP5nfEyjlrSr8t/YdNfU/1XEt7c5b4OxcXCjyRhjzLYu/rO69/WHPuYcbCWkz8kAeZVZp2N2+IOLLEPGw==",
            "requires": {
                "@jest/test-result": "^26.6.2",
                "graceful-fs": "^4.2.4",
                "jest-haste-map": "^26.6.2",
                "jest-runner": "^26.6.3",
                "jest-runtime": "^26.6.3"
            }
        },
        "@jest/transform": {
            "version": "26.6.2",
            "resolved": "https://registry.npmjs.org/@jest/transform/-/transform-26.6.2.tgz",
            "integrity": "sha512-E9JjhUgNzvuQ+vVAL21vlyfy12gP0GhazGgJC4h6qUt1jSdUXGWJ1wfu/X7Sd8etSgxV4ovT1pb9v5D6QW4XgA==",
            "requires": {
                "@babel/core": "^7.1.0",
                "@jest/types": "^26.6.2",
                "babel-plugin-istanbul": "^6.0.0",
                "chalk": "^4.0.0",
                "convert-source-map": "^1.4.0",
                "fast-json-stable-stringify": "^2.0.0",
                "graceful-fs": "^4.2.4",
                "jest-haste-map": "^26.6.2",
                "jest-regex-util": "^26.0.0",
                "jest-util": "^26.6.2",
                "micromatch": "^4.0.2",
                "pirates": "^4.0.1",
                "slash": "^3.0.0",
                "source-map": "^0.6.1",
                "write-file-atomic": "^3.0.0"
            }
        },
        "@jest/types": {
            "version": "26.6.2",
            "resolved": "https://registry.npmjs.org/@jest/types/-/types-26.6.2.tgz",
            "integrity": "sha512-fC6QCp7Sc5sX6g8Tvbmj4XUTbyrik0akgRy03yjXbQaBWWNWGE7SGtJk98m0N8nzegD/7SggrUlivxo5ax4KWQ==",
            "requires": {
                "@types/istanbul-lib-coverage": "^2.0.0",
                "@types/istanbul-reports": "^3.0.0",
                "@types/node": "*",
                "@types/yargs": "^15.0.0",
                "chalk": "^4.0.0"
            }
        },
        "@sinonjs/commons": {
            "version": "1.8.3",
            "resolved": "https://registry.npmjs.org/@sinonjs/commons/-/commons-1.8.3.tgz",
            "integrity": "sha512-xkNcLAn/wZaX14RPlwizcKicDk9G3F8m2nU3L7Ukm5zBgTwiT0wsoFAHx9Jq56fJA1z/7uKGtCRu16sOUCLIHQ==",
            "requires": {
                "type-detect": "4.0.8"
            }
        },
        "@sinonjs/fake-timers": {
            "version": "6.0.1",
            "resolved": "https://registry.npmjs.org/@sinonjs/fake-timers/-/fake-timers-6.0.1.tgz",
            "integrity": "sha512-MZPUxrmFubI36XS1DI3qmI0YdN1gks62JtFZvxR67ljjSNCeK6U08Zx4msEWOXuofgqUt6zPHSi1H9fbjR/NRA==",
            "requires": {
                "@sinonjs/commons": "^1.7.0"
            }
        },
        "@types/babel__core": {
            "version": "7.1.14",
            "resolved": "https://registry.npmjs.org/@types/babel__core/-/babel__core-7.1.14.tgz",
            "integrity": "sha512-zGZJzzBUVDo/eV6KgbE0f0ZI7dInEYvo12Rb70uNQDshC3SkRMb67ja0GgRHZgAX3Za6rhaWlvbDO8rrGyAb1g==",
            "requires": {
                "@babel/parser": "^7.1.0",
                "@babel/types": "^7.0.0",
                "@types/babel__generator": "*",
                "@types/babel__template": "*",
                "@types/babel__traverse": "*"
            }
        },
        "@types/babel__generator": {
            "version": "7.6.2",
            "resolved": "https://registry.npmjs.org/@types/babel__generator/-/babel__generator-7.6.2.tgz",
            "integrity": "sha512-MdSJnBjl+bdwkLskZ3NGFp9YcXGx5ggLpQQPqtgakVhsWK0hTtNYhjpZLlWQTviGTvF8at+Bvli3jV7faPdgeQ==",
            "requires": {
                "@babel/types": "^7.0.0"
            }
        },
        "@types/babel__template": {
            "version": "7.4.0",
            "resolved": "https://registry.npmjs.org/@types/babel__template/-/babel__template-7.4.0.tgz",
            "integrity": "sha512-NTPErx4/FiPCGScH7foPyr+/1Dkzkni+rHiYHHoTjvwou7AQzJkNeD60A9CXRy+ZEN2B1bggmkTMCDb+Mv5k+A==",
            "requires": {
                "@babel/parser": "^7.1.0",
                "@babel/types": "^7.0.0"
            }
        },
        "@types/babel__traverse": {
            "version": "7.11.1",
            "resolved": "https://registry.npmjs.org/@types/babel__traverse/-/babel__traverse-7.11.1.tgz",
            "integrity": "sha512-Vs0hm0vPahPMYi9tDjtP66llufgO3ST16WXaSTtDGEl9cewAl3AibmxWw6TINOqHPT9z0uABKAYjT9jNSg4npw==",
            "requires": {
                "@babel/types": "^7.3.0"
            }
        },
        "@types/graceful-fs": {
            "version": "4.1.5",
            "resolved": "https://registry.npmjs.org/@types/graceful-fs/-/graceful-fs-4.1.5.tgz",
            "integrity": "sha512-anKkLmZZ+xm4p8JWBf4hElkM4XR+EZeA2M9BAkkTldmcyDY4mbdIJnRghDJH3Ov5ooY7/UAoENtmdMSkaAd7Cw==",
            "requires": {
                "@types/node": "*"
            }
        },
        "@types/istanbul-lib-coverage": {
            "version": "2.0.3",
            "resolved": "https://registry.npmjs.org/@types/istanbul-lib-coverage/-/istanbul-lib-coverage-2.0.3.tgz",
            "integrity": "sha512-sz7iLqvVUg1gIedBOvlkxPlc8/uVzyS5OwGz1cKjXzkl3FpL3al0crU8YGU1WoHkxn0Wxbw5tyi6hvzJKNzFsw=="
        },
        "@types/istanbul-lib-report": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/@types/istanbul-lib-report/-/istanbul-lib-report-3.0.0.tgz",
            "integrity": "sha512-plGgXAPfVKFoYfa9NpYDAkseG+g6Jr294RqeqcqDixSbU34MZVJRi/P+7Y8GDpzkEwLaGZZOpKIEmeVZNtKsrg==",
            "requires": {
                "@types/istanbul-lib-coverage": "*"
            }
        },
        "@types/istanbul-reports": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/@types/istanbul-reports/-/istanbul-reports-3.0.0.tgz",
            "integrity": "sha512-nwKNbvnwJ2/mndE9ItP/zc2TCzw6uuodnF4EHYWD+gCQDVBuRQL5UzbZD0/ezy1iKsFU2ZQiDqg4M9dN4+wZgA==",
            "requires": {
                "@types/istanbul-lib-report": "*"
            }
        },
        "@types/node": {
            "version": "14.14.41",
            "resolved": "https://registry.npmjs.org/@types/node/-/node-14.14.41.tgz",
            "integrity": "sha512-dueRKfaJL4RTtSa7bWeTK1M+VH+Gns73oCgzvYfHZywRCoPSd8EkXBL0mZ9unPTveBn+D9phZBaxuzpwjWkW0g=="
        },
        "@types/normalize-package-data": {
            "version": "2.4.0",
            "resolved": "https://registry.npmjs.org/@types/normalize-package-data/-/normalize-package-data-2.4.0.tgz",
            "integrity": "sha512-f5j5b/Gf71L+dbqxIpQ4Z2WlmI/mPJ0fOkGGmFgtb6sAu97EPczzbS3/tJKxmcYDj55OX6ssqwDAWOHIYDRDGA=="
        },
        "@types/prettier": {
            "version": "2.2.3",
            "resolved": "https://registry.npmjs.org/@types/prettier/-/prettier-2.2.3.tgz",
            "integrity": "sha512-PijRCG/K3s3w1We6ynUKdxEc5AcuuH3NBmMDP8uvKVp6X43UY7NQlTzczakXP3DJR0F4dfNQIGjU2cUeRYs2AA=="
        },
        "@types/stack-utils": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/@types/stack-utils/-/stack-utils-2.0.0.tgz",
            "integrity": "sha512-RJJrrySY7A8havqpGObOB4W92QXKJo63/jFLLgpvOtsGUqbQZ9Sbgl35KMm1DjC6j7AvmmU2bIno+3IyEaemaw=="
        },
        "@types/yargs": {
            "version": "15.0.13",
            "resolved": "https://registry.npmjs.org/@types/yargs/-/yargs-15.0.13.tgz",
            "integrity": "sha512-kQ5JNTrbDv3Rp5X2n/iUu37IJBDU2gsZ5R/g1/KHOOEc5IKfUFjXT6DENPGduh08I/pamwtEq4oul7gUqKTQDQ==",
            "requires": {
                "@types/yargs-parser": "*"
            }
        },
        "@types/yargs-parser": {
            "version": "20.2.0",
            "resolved": "https://registry.npmjs.org/@types/yargs-parser/-/yargs-parser-20.2.0.tgz",
            "integrity": "sha512-37RSHht+gzzgYeobbG+KWryeAW8J33Nhr69cjTqSYymXVZEN9NbRYWoYlRtDhHKPVT1FyNKwaTPC1NynKZpzRA=="
        },
        "abab": {
            "version": "2.0.5",
            "resolved": "https://registry.npmjs.org/abab/-/abab-2.0.5.tgz",
            "integrity": "sha512-9IK9EadsbHo6jLWIpxpR6pL0sazTXV6+SQv25ZB+F7Bj9mJNaOc4nCRabwd5M/JwmUa8idz6Eci6eKfJryPs6Q=="
        },
        "accepts": {
            "version": "1.3.7",
            "resolved": "https://registry.npmjs.org/accepts/-/accepts-1.3.7.tgz",
            "integrity": "sha512-Il80Qs2WjYlJIBNzNkK6KYqlVMTbZLXgHx2oT0pU/fjRHyEp+PEfEPY0R3WCwAGVOtauxh1hOxNgIf5bv7dQpA==",
            "requires": {
                "mime-types": "~2.1.24",
                "negotiator": "0.6.2"
            }
        },
        "acorn": {
            "version": "8.1.1",
            "resolved": "https://registry.npmjs.org/acorn/-/acorn-8.1.1.tgz",
            "integrity": "sha512-xYiIVjNuqtKXMxlRMDc6mZUhXehod4a3gbZ1qRlM7icK4EbxUFNLhWoPblCvFtB2Y9CIqHP3CF/rdxLItaQv8g=="
        },
        "acorn-globals": {
            "version": "6.0.0",
            "resolved": "https://registry.npmjs.org/acorn-globals/-/acorn-globals-6.0.0.tgz",
            "integrity": "sha512-ZQl7LOWaF5ePqqcX4hLuv/bLXYQNfNWw2c0/yX/TsPRKamzHcTGQnlCjHT3TsmkOUVEPS3crCxiPfdzE/Trlhg==",
            "requires": {
                "acorn": "^7.1.1",
                "acorn-walk": "^7.1.1"
            },
            "dependencies": {
                "acorn": {
                    "version": "7.4.1",
                    "resolved": "https://registry.npmjs.org/acorn/-/acorn-7.4.1.tgz",
                    "integrity": "sha512-nQyp0o1/mNdbTO1PO6kHkwSrmgZ0MT/jCCpNiwbUjGoRN4dlBhqJtoQuCnEOKzgTVwg0ZWiCoQy6SxMebQVh8A=="
                }
            }
        },
        "acorn-walk": {
            "version": "7.2.0",
            "resolved": "https://registry.npmjs.org/acorn-walk/-/acorn-walk-7.2.0.tgz",
            "integrity": "sha512-OPdCF6GsMIP+Az+aWfAAOEt2/+iVDKE7oy6lJ098aoe59oAmK76qV6Gw60SbZ8jHuG2wH058GF4pLFbYamYrVA=="
        },
        "ajv": {
            "version": "6.12.6",
            "resolved": "https://registry.npmjs.org/ajv/-/ajv-6.12.6.tgz",
            "integrity": "sha512-j3fVLgvTo527anyYyJOGTYJbG+vnnQYvE0m5mmkc1TK+nxAppkCLMIL0aZ4dblVCNoGShhm+kzE4ZUykBoMg4g==",
            "requires": {
                "fast-deep-equal": "^3.1.1",
                "fast-json-stable-stringify": "^2.0.0",
                "json-schema-traverse": "^0.4.1",
                "uri-js": "^4.2.2"
            }
        },
        "ansi-escapes": {
            "version": "4.3.2",
            "resolved": "https://registry.npmjs.org/ansi-escapes/-/ansi-escapes-4.3.2.tgz",
            "integrity": "sha512-gKXj5ALrKWQLsYG9jlTRmR/xKluxHV+Z9QEwNIgCfM1/uwPMCuzVVnh5mwTd+OuBZcwSIMbqssNWRm1lE51QaQ==",
            "requires": {
                "type-fest": "^0.21.3"
            },
            "dependencies": {
                "type-fest": {
                    "version": "0.21.3",
                    "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.21.3.tgz",
                    "integrity": "sha512-t0rzBq87m3fVcduHDUFhKmyyX+9eo6WQjZvf51Ea/M0Q7+T374Jp1aUiyUl0GKxp8M/OETVHSDvmkyPgvX+X2w=="
                }
            }
        },
        "ansi-regex": {
            "version": "5.0.0",
            "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.0.tgz",
            "integrity": "sha512-bY6fj56OUQ0hU1KjFNDQuJFezqKdrAyFdIevADiqrWHwSlbmBNMHp5ak2f40Pm8JTFyM2mqxkG6ngkHO11f/lg=="
        },
        "ansi-styles": {
            "version": "4.3.0",
            "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
            "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
            "requires": {
                "color-convert": "^2.0.1"
            }
        },
        "anymatch": {
            "version": "3.1.2",
            "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-3.1.2.tgz",
            "integrity": "sha512-P43ePfOAIupkguHUycrc4qJ9kz8ZiuOUijaETwX7THt0Y/GNK7v0aa8rY816xWjZ7rJdA5XdMcpVFTKMq+RvWg==",
            "requires": {
                "normalize-path": "^3.0.0",
                "picomatch": "^2.0.4"
            }
        },
        "argparse": {
            "version": "1.0.10",
            "resolved": "https://registry.npmjs.org/argparse/-/argparse-1.0.10.tgz",
            "integrity": "sha512-o5Roy6tNG4SL/FOkCAN6RzjiakZS25RLYFrcMttJqbdd8BWrnA+fGz57iN5Pb06pvBGvl5gQ0B48dJlslXvoTg==",
            "requires": {
                "sprintf-js": "~1.0.2"
            }
        },
        "arr-diff": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/arr-diff/-/arr-diff-4.0.0.tgz",
            "integrity": "sha1-1kYQdP6/7HHn4VI1dhoyml3HxSA="
        },
        "arr-flatten": {
            "version": "1.1.0",
            "resolved": "https://registry.npmjs.org/arr-flatten/-/arr-flatten-1.1.0.tgz",
            "integrity": "sha512-L3hKV5R/p5o81R7O02IGnwpDmkp6E982XhtbuwSe3O4qOtMMMtodicASA1Cny2U+aCXcNpml+m4dPsvsJ3jatg=="
        },
        "arr-union": {
            "version": "3.1.0",
            "resolved": "https://registry.npmjs.org/arr-union/-/arr-union-3.1.0.tgz",
            "integrity": "sha1-45sJrqne+Gao8gbiiK9jkZuuOcQ="
        },
        "array-flatten": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/array-flatten/-/array-flatten-1.1.1.tgz",
            "integrity": "sha1-ml9pkFGx5wczKPKgCJaLZOopVdI="
        },
        "array-unique": {
            "version": "0.3.2",
            "resolved": "https://registry.npmjs.org/array-unique/-/array-unique-0.3.2.tgz",
            "integrity": "sha1-qJS3XUvE9s1nnvMkSp/Y9Gri1Cg="
        },
        "asn1": {
            "version": "0.2.4",
            "resolved": "https://registry.npmjs.org/asn1/-/asn1-0.2.4.tgz",
            "integrity": "sha512-jxwzQpLQjSmWXgwaCZE9Nz+glAG01yF1QnWgbhGwHI5A6FRIEY6IVqtHhIepHqI7/kyEyQEagBC5mBEFlIYvdg==",
            "requires": {
                "safer-buffer": "~2.1.0"
            }
        },
        "assert-plus": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/assert-plus/-/assert-plus-1.0.0.tgz",
            "integrity": "sha1-8S4PPF13sLHN2RRpQuTpbB5N1SU="
        },
        "assign-symbols": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/assign-symbols/-/assign-symbols-1.0.0.tgz",
            "integrity": "sha1-WWZ/QfrdTyDMvCu5a41Pf3jsA2c="
        },
        "asynckit": {
            "version": "0.4.0",
            "resolved": "https://registry.npmjs.org/asynckit/-/asynckit-0.4.0.tgz",
            "integrity": "sha1-x57Zf380y48robyXkLzDZkdLS3k="
        },
        "atob": {
            "version": "2.1.2",
            "resolved": "https://registry.npmjs.org/atob/-/atob-2.1.2.tgz",
            "integrity": "sha512-Wm6ukoaOGJi/73p/cl2GvLjTI5JM1k/O14isD73YML8StrH/7/lRFgmg8nICZgD3bZZvjwCGxtMOD3wWNAu8cg=="
        },
        "aws-sign2": {
            "version": "0.7.0",
            "resolved": "https://registry.npmjs.org/aws-sign2/-/aws-sign2-0.7.0.tgz",
            "integrity": "sha1-tG6JCTSpWR8tL2+G1+ap8bP+dqg="
        },
        "aws4": {
            "version": "1.11.0",
            "resolved": "https://registry.npmjs.org/aws4/-/aws4-1.11.0.tgz",
            "integrity": "sha512-xh1Rl34h6Fi1DC2WWKfxUTVqRsNnr6LsKz2+hfwDxQJWmrx8+c7ylaqBMcHfl1U1r2dsifOvKX3LQuLNZ+XSvA=="
        },
        "babel-jest": {
            "version": "26.6.3",
            "resolved": "https://registry.npmjs.org/babel-jest/-/babel-jest-26.6.3.tgz",
            "integrity": "sha512-pl4Q+GAVOHwvjrck6jKjvmGhnO3jHX/xuB9d27f+EJZ/6k+6nMuPjorrYp7s++bKKdANwzElBWnLWaObvTnaZA==",
            "requires": {
                "@jest/transform": "^26.6.2",
                "@jest/types": "^26.6.2",
                "@types/babel__core": "^7.1.7",
                "babel-plugin-istanbul": "^6.0.0",
                "babel-preset-jest": "^26.6.2",
                "chalk": "^4.0.0",
                "graceful-fs": "^4.2.4",
                "slash": "^3.0.0"
            }
        },
        "babel-plugin-istanbul": {
            "version": "6.0.0",
            "resolved": "https://registry.npmjs.org/babel-plugin-istanbul/-/babel-plugin-istanbul-6.0.0.tgz",
            "integrity": "sha512-AF55rZXpe7trmEylbaE1Gv54wn6rwU03aptvRoVIGP8YykoSxqdVLV1TfwflBCE/QtHmqtP8SWlTENqbK8GCSQ==",
            "requires": {
                "@babel/helper-plugin-utils": "^7.0.0",
                "@istanbuljs/load-nyc-config": "^1.0.0",
                "@istanbuljs/schema": "^0.1.2",
                "istanbul-lib-instrument": "^4.0.0",
                "test-exclude": "^6.0.0"
            }
        },
        "babel-plugin-jest-hoist": {
            "version": "26.6.2",
            "resolved": "https://registry.npmjs.org/babel-plugin-jest-hoist/-/babel-plugin-jest-hoist-26.6.2.tgz",
            "integrity": "sha512-PO9t0697lNTmcEHH69mdtYiOIkkOlj9fySqfO3K1eCcdISevLAE0xY59VLLUj0SoiPiTX/JU2CYFpILydUa5Lw==",
            "requires": {
                "@babel/template": "^7.3.3",
                "@babel/types": "^7.3.3",
                "@types/babel__core": "^7.0.0",
                "@types/babel__traverse": "^7.0.6"
            }
        },
        "babel-preset-current-node-syntax": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/babel-preset-current-node-syntax/-/babel-preset-current-node-syntax-1.0.1.tgz",
            "integrity": "sha512-M7LQ0bxarkxQoN+vz5aJPsLBn77n8QgTFmo8WK0/44auK2xlCXrYcUxHFxgU7qW5Yzw/CjmLRK2uJzaCd7LvqQ==",
            "requires": {
                "@babel/plugin-syntax-async-generators": "^7.8.4",
                "@babel/plugin-syntax-bigint": "^7.8.3",
                "@babel/plugin-syntax-class-properties": "^7.8.3",
                "@babel/plugin-syntax-import-meta": "^7.8.3",
                "@babel/plugin-syntax-json-strings": "^7.8.3",
                "@babel/plugin-syntax-logical-assignment-operators": "^7.8.3",
                "@babel/plugin-syntax-nullish-coalescing-operator": "^7.8.3",
                "@babel/plugin-syntax-numeric-separator": "^7.8.3",
                "@babel/plugin-syntax-object-rest-spread": "^7.8.3",
                "@babel/plugin-syntax-optional-catch-binding": "^7.8.3",
                "@babel/plugin-syntax-optional-chaining": "^7.8.3",
                "@babel/plugin-syntax-top-level-await": "^7.8.3"
            }
        },
        "babel-preset-jest": {
            "version": "26.6.2",
            "resolved": "https://registry.npmjs.org/babel-preset-jest/-/babel-preset-jest-26.6.2.tgz",
            "integrity": "sha512-YvdtlVm9t3k777c5NPQIv6cxFFFapys25HiUmuSgHwIZhfifweR5c5Sf5nwE3MAbfu327CYSvps8Yx6ANLyleQ==",
            "requires": {
                "babel-plugin-jest-hoist": "^26.6.2",
                "babel-preset-current-node-syntax": "^1.0.0"
            }
        },
        "balanced-match": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz",
            "integrity": "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw=="
        },
        "base": {
            "version": "0.11.2",
            "resolved": "https://registry.npmjs.org/base/-/base-0.11.2.tgz",
            "integrity": "sha512-5T6P4xPgpp0YDFvSWwEZ4NoE3aM4QBQXDzmVbraCkFj8zHM+mba8SyqB5DbZWyR7mYHo6Y7BdQo3MoA4m0TeQg==",
            "requires": {
                "cache-base": "^1.0.1",
                "class-utils": "^0.3.5",
                "component-emitter": "^1.2.1",
                "define-property": "^1.0.0",
                "isobject": "^3.0.1",
                "mixin-deep": "^1.2.0",
                "pascalcase": "^0.1.1"
            },
            "dependencies": {
                "define-property": {
                    "version": "1.0.0",
                    "resolved": "https://registry.npmjs.org/define-property/-/define-property-1.0.0.tgz",
                    "integrity": "sha1-dp66rz9KY6rTr56NMEybvnm/sOY=",
                    "requires": {
                        "is-descriptor": "^1.0.0"
                    }
                },
                "is-accessor-descriptor": {
                    "version": "1.0.0",
                    "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
                    "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
                    "requires": {
                        "kind-of": "^6.0.0"
                    }
                },
                "is-data-descriptor": {
                    "version": "1.0.0",
                    "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
                    "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
                    "requires": {
                        "kind-of": "^6.0.0"
                    }
                },
                "is-descriptor": {
                    "version": "1.0.2",
                    "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",
                    "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
                    "requires": {
                        "is-accessor-descriptor": "^1.0.0",
                        "is-data-descriptor": "^1.0.0",
                        "kind-of": "^6.0.2"
                    }
                }
            }
        },
        "bcrypt-pbkdf": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/bcrypt-pbkdf/-/bcrypt-pbkdf-1.0.2.tgz",
            "integrity": "sha1-pDAdOJtqQ/m2f/PKEaP2Y342Dp4=",
            "requires": {
                "tweetnacl": "^0.14.3"
            }
        },
        "body-parser": {
            "version": "1.19.0",
            "resolved": "https://registry.npmjs.org/body-parser/-/body-parser-1.19.0.tgz",
            "integrity": "sha512-dhEPs72UPbDnAQJ9ZKMNTP6ptJaionhP5cBb541nXPlW60Jepo9RV/a4fX4XWW9CuFNK22krhrj1+rgzifNCsw==",
            "requires": {
                "bytes": "3.1.0",
                "content-type": "~1.0.4",
                "debug": "2.6.9",
                "depd": "~1.1.2",
                "http-errors": "1.7.2",
                "iconv-lite": "0.4.24",
                "on-finished": "~2.3.0",
                "qs": "6.7.0",
                "raw-body": "2.4.0",
                "type-is": "~1.6.17"
            }
        },
        "brace-expansion": {
            "version": "1.1.11",
            "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
            "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",
            "requires": {
                "balanced-match": "^1.0.0",
                "concat-map": "0.0.1"
            }
        },
        "braces": {
            "version": "3.0.2",
            "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.2.tgz",
            "integrity": "sha512-b8um+L1RzM3WDSzvhm6gIz1yfTbBt6YTlcEKAvsmqCZZFw46z626lVj9j1yEPW33H5H+lBQpZMP1k8l+78Ha0A==",
            "requires": {
                "fill-range": "^7.0.1"
            }
        },
        "browser-process-hrtime": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/browser-process-hrtime/-/browser-process-hrtime-1.0.0.tgz",
            "integrity": "sha512-9o5UecI3GhkpM6DrXr69PblIuWxPKk9Y0jHBRhdocZ2y7YECBFCsHm79Pr3OyR2AvjhDkabFJaDJMYRazHgsow=="
        },
        "browserslist": {
            "version": "4.16.4",
            "resolved": "https://registry.npmjs.org/browserslist/-/browserslist-4.16.4.tgz",
            "integrity": "sha512-d7rCxYV8I9kj41RH8UKYnvDYCRENUlHRgyXy/Rhr/1BaeLGfiCptEdFE8MIrvGfWbBFNjVYx76SQWvNX1j+/cQ==",
            "requires": {
                "caniuse-lite": "^1.0.30001208",
                "colorette": "^1.2.2",
                "electron-to-chromium": "^1.3.712",
                "escalade": "^3.1.1",
                "node-releases": "^1.1.71"
            }
        },
        "bser": {
            "version": "2.1.1",
            "resolved": "https://registry.npmjs.org/bser/-/bser-2.1.1.tgz",
            "integrity": "sha512-gQxTNE/GAfIIrmHLUE3oJyp5FO6HRBfhjnw4/wMmA63ZGDJnWBmgY/lyQBpnDUkGmAhbSe39tx2d/iTOAfglwQ==",
            "requires": {
                "node-int64": "^0.4.0"
            }
        },
        "buffer-from": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/buffer-from/-/buffer-from-1.1.1.tgz",
            "integrity": "sha512-MQcXEUbCKtEo7bhqEs6560Hyd4XaovZlO/k9V3hjVUF/zwW7KBVdSK4gIt/bzwS9MbR5qob+F5jusZsb0YQK2A=="
        },
        "bytes": {
            "version": "3.1.0",
            "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.1.0.tgz",
            "integrity": "sha512-zauLjrfCG+xvoyaqLoV8bLVXXNGC4JqlxFCutSDWA6fJrTo2ZuvLYTqZ7aHBLZSMOopbzwv8f+wZcVzfVTI2Dg=="
        },
        "cache-base": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/cache-base/-/cache-base-1.0.1.tgz",
            "integrity": "sha512-AKcdTnFSWATd5/GCPRxr2ChwIJ85CeyrEyjRHlKxQ56d4XJMGym0uAiKn0xbLOGOl3+yRpOTi484dVCEc5AUzQ==",
            "requires": {
                "collection-visit": "^1.0.0",
                "component-emitter": "^1.2.1",
                "get-value": "^2.0.6",
                "has-value": "^1.0.0",
                "isobject": "^3.0.1",
                "set-value": "^2.0.0",
                "to-object-path": "^0.3.0",
                "union-value": "^1.0.0",
                "unset-value": "^1.0.0"
            }
        },
        "call-bind": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/call-bind/-/call-bind-1.0.2.tgz",
            "integrity": "sha512-7O+FbCihrB5WGbFYesctwmTKae6rOiIzmz1icreWJ+0aA7LJfuqhEso2T9ncpcFtzMQtzXf2QGGueWJGTYsqrA==",
            "requires": {
                "function-bind": "^1.1.1",
                "get-intrinsic": "^1.0.2"
            }
        },
        "callsites": {
            "version": "3.1.0",
            "resolved": "https://registry.npmjs.org/callsites/-/callsites-3.1.0.tgz",
            "integrity": "sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ=="
        },
        "camelcase": {
            "version": "5.3.1",
            "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-5.3.1.tgz",
            "integrity": "sha512-L28STB170nwWS63UjtlEOE3dldQApaJXZkOI1uMFfzf3rRuPegHaHesyee+YxQ+W6SvRDQV6UrdOdRiR153wJg=="
        },
        "caniuse-lite": {
            "version": "1.0.30001211",
            "resolved": "https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001211.tgz",
            "integrity": "sha512-v3GXWKofIkN3PkSidLI5d1oqeKNsam9nQkqieoMhP87nxOY0RPDC8X2+jcv8pjV4dRozPLSoMqNii9sDViOlIg=="
        },
        "capture-exit": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/capture-exit/-/capture-exit-2.0.0.tgz",
            "integrity": "sha512-PiT/hQmTonHhl/HFGN+Lx3JJUznrVYJ3+AQsnthneZbvW7x+f08Tk7yLJTLEOUvBTbduLeeBkxEaYXUOUrRq6g==",
            "requires": {
                "rsvp": "^4.8.4"
            }
        },
        "caseless": {
            "version": "0.12.0",
            "resolved": "https://registry.npmjs.org/caseless/-/caseless-0.12.0.tgz",
            "integrity": "sha1-G2gcIf+EAzyCZUMJBolCDRhxUdw="
        },
        "chalk": {
            "version": "4.1.0",
            "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.0.tgz",
            "integrity": "sha512-qwx12AxXe2Q5xQ43Ac//I6v5aXTipYrSESdOgzrN+9XjgEpyjpKuvSGaN4qE93f7TQTlerQQ8S+EQ0EyDoVL1A==",
            "requires": {
                "ansi-styles": "^4.1.0",
                "supports-color": "^7.1.0"
            }
        },
        "char-regex": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/char-regex/-/char-regex-1.0.2.tgz",
            "integrity": "sha512-kWWXztvZ5SBQV+eRgKFeh8q5sLuZY2+8WUIzlxWVTg+oGwY14qylx1KbKzHd8P6ZYkAg0xyIDU9JMHhyJMZ1jw=="
        },
        "ci-info": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/ci-info/-/ci-info-2.0.0.tgz",
            "integrity": "sha512-5tK7EtrZ0N+OLFMthtqOj4fI2Jeb88C4CAZPu25LDVUgXJ0A3Js4PMGqrn0JU1W0Mh1/Z8wZzYPxqUrXeBboCQ=="
        },
        "cjs-module-lexer": {
            "version": "0.6.0",
            "resolved": "https://registry.npmjs.org/cjs-module-lexer/-/cjs-module-lexer-0.6.0.tgz",
            "integrity": "sha512-uc2Vix1frTfnuzxxu1Hp4ktSvM3QaI4oXl4ZUqL1wjTu/BGki9TrCWoqLTg/drR1KwAEarXuRFCG2Svr1GxPFw=="
        },
        "class-utils": {
            "version": "0.3.6",
            "resolved": "https://registry.npmjs.org/class-utils/-/class-utils-0.3.6.tgz",
            "integrity": "sha512-qOhPa/Fj7s6TY8H8esGu5QNpMMQxz79h+urzrNYN6mn+9BnxlDGf5QZ+XeCDsxSjPqsSR56XOZOJmpeurnLMeg==",
            "requires": {
                "arr-union": "^3.1.0",
                "define-property": "^0.2.5",
                "isobject": "^3.0.0",
                "static-extend": "^0.1.1"
            },
            "dependencies": {
                "define-property": {
                    "version": "0.2.5",
                    "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
                    "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
                    "requires": {
                        "is-descriptor": "^0.1.0"
                    }
                }
            }
        },
        "cliui": {
            "version": "6.0.0",
            "resolved": "https://registry.npmjs.org/cliui/-/cliui-6.0.0.tgz",
            "integrity": "sha512-t6wbgtoCXvAzst7QgXxJYqPt0usEfbgQdftEPbLL/cvv6HPE5VgvqCuAIDR0NgU52ds6rFwqrgakNLrHEjCbrQ==",
            "requires": {
                "string-width": "^4.2.0",
                "strip-ansi": "^6.0.0",
                "wrap-ansi": "^6.2.0"
            }
        },
        "co": {
            "version": "4.6.0",
            "resolved": "https://registry.npmjs.org/co/-/co-4.6.0.tgz",
            "integrity": "sha1-bqa989hTrlTMuOR7+gvz+QMfsYQ="
        },
        "collect-v8-coverage": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/collect-v8-coverage/-/collect-v8-coverage-1.0.1.tgz",
            "integrity": "sha512-iBPtljfCNcTKNAto0KEtDfZ3qzjJvqE3aTGZsbhjSBlorqpXJlaWWtPO35D+ZImoC3KWejX64o+yPGxhWSTzfg=="
        },
        "collection-visit": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/collection-visit/-/collection-visit-1.0.0.tgz",
            "integrity": "sha1-S8A3PBZLwykbTTaMgpzxqApZ3KA=",
            "requires": {
                "map-visit": "^1.0.0",
                "object-visit": "^1.0.0"
            }
        },
        "color-convert": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
            "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
            "requires": {
                "color-name": "~1.1.4"
            }
        },
        "color-name": {
            "version": "1.1.4",
            "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
            "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
        },
        "colorette": {
            "version": "1.2.2",
            "resolved": "https://registry.npmjs.org/colorette/-/colorette-1.2.2.tgz",
            "integrity": "sha512-MKGMzyfeuutC/ZJ1cba9NqcNpfeqMUcYmyF1ZFY6/Cn7CNSAKx6a+s48sqLqyAiZuaP2TcqMhoo+dlwFnVxT9w=="
        },
        "combined-stream": {
            "version": "1.0.8",
            "resolved": "https://registry.npmjs.org/combined-stream/-/combined-stream-1.0.8.tgz",
            "integrity": "sha512-FQN4MRfuJeHf7cBbBMJFXhKSDq+2kAArBlmRBvcvFE5BB1HZKXtSFASDhdlz9zOYwxh8lDdnvmMOe/+5cdoEdg==",
            "requires": {
                "delayed-stream": "~1.0.0"
            }
        },
        "component-emitter": {
            "version": "1.3.0",
            "resolved": "https://registry.npmjs.org/component-emitter/-/component-emitter-1.3.0.tgz",
            "integrity": "sha512-Rd3se6QB+sO1TwqZjscQrurpEPIfO0/yYnSin6Q/rD3mOutHvUrCAhJub3r90uNb+SESBuE0QYoB90YdfatsRg=="
        },
        "concat-map": {
            "version": "0.0.1",
            "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
            "integrity": "sha1-2Klr13/Wjfd5OnMDajug1UBdR3s="
        },
        "content-disposition": {
            "version": "0.5.3",
            "resolved": "https://registry.npmjs.org/content-disposition/-/content-disposition-0.5.3.tgz",
            "integrity": "sha512-ExO0774ikEObIAEV9kDo50o+79VCUdEB6n6lzKgGwupcVeRlhrj3qGAfwq8G6uBJjkqLrhT0qEYFcWng8z1z0g==",
            "requires": {
                "safe-buffer": "5.1.2"
            }
        },
        "content-type": {
            "version": "1.0.4",
            "resolved": "https://registry.npmjs.org/content-type/-/content-type-1.0.4.tgz",
            "integrity": "sha512-hIP3EEPs8tB9AT1L+NUqtwOAps4mk2Zob89MWXMHjHWg9milF/j4osnnQLXBCBFBk/tvIG/tUc9mOUJiPBhPXA=="
        },
        "convert-source-map": {
            "version": "1.7.0",
            "resolved": "https://registry.npmjs.org/convert-source-map/-/convert-source-map-1.7.0.tgz",
            "integrity": "sha512-4FJkXzKXEDB1snCFZlLP4gpC3JILicCpGbzG9f9G7tGqGCzETQ2hWPrcinA9oU4wtf2biUaEH5065UnMeR33oA==",
            "requires": {
                "safe-buffer": "~5.1.1"
            }
        },
        "cookie": {
            "version": "0.4.0",
            "resolved": "https://registry.npmjs.org/cookie/-/cookie-0.4.0.tgz",
            "integrity": "sha512-+Hp8fLp57wnUSt0tY0tHEXh4voZRDnoIrZPqlo3DPiI4y9lwg/jqx+1Om94/W6ZaPDOUbnjOt/99w66zk+l1Xg=="
        },
        "cookie-signature": {
            "version": "1.0.6",
            "resolved": "https://registry.npmjs.org/cookie-signature/-/cookie-signature-1.0.6.tgz",
            "integrity": "sha1-4wOogrNCzD7oylE6eZmXNNqzriw="
        },
        "cookiejar": {
            "version": "2.1.2",
            "resolved": "https://registry.npmjs.org/cookiejar/-/cookiejar-2.1.2.tgz",
            "integrity": "sha512-Mw+adcfzPxcPeI+0WlvRrr/3lGVO0bD75SxX6811cxSh1Wbxx7xZBGK1eVtDf6si8rg2lhnUjsVLMFMfbRIuwA=="
        },
        "copy-descriptor": {
            "version": "0.1.1",
            "resolved": "https://registry.npmjs.org/copy-descriptor/-/copy-descriptor-0.1.1.tgz",
            "integrity": "sha1-Z29us8OZl8LuGsOpJP1hJHSPV40="
        },
        "core-util-is": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/core-util-is/-/core-util-is-1.0.2.tgz",
            "integrity": "sha1-tf1UIgqivFq1eqtxQMlAdUUDwac="
        },
        "cross-spawn": {
            "version": "6.0.5",
            "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-6.0.5.tgz",
            "integrity": "sha512-eTVLrBSt7fjbDygz805pMnstIs2VTBNkRm0qxZd+M7A5XDdxVRWO5MxGBXZhjY4cqLYLdtrGqRf8mBPmzwSpWQ==",
            "requires": {
                "nice-try": "^1.0.4",
                "path-key": "^2.0.1",
                "semver": "^5.5.0",
                "shebang-command": "^1.2.0",
                "which": "^1.2.9"
            },
            "dependencies": {
                "semver": {
                    "version": "5.7.1",
                    "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
                    "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ=="
                }
            }
        },
        "cssom": {
            "version": "0.4.4",
            "resolved": "https://registry.npmjs.org/cssom/-/cssom-0.4.4.tgz",
            "integrity": "sha512-p3pvU7r1MyyqbTk+WbNJIgJjG2VmTIaB10rI93LzVPrmDJKkzKYMtxxyAvQXR/NS6otuzveI7+7BBq3SjBS2mw=="
        },
        "cssstyle": {
            "version": "2.3.0",
            "resolved": "https://registry.npmjs.org/cssstyle/-/cssstyle-2.3.0.tgz",
            "integrity": "sha512-AZL67abkUzIuvcHqk7c09cezpGNcxUxU4Ioi/05xHk4DQeTkWmGYftIE6ctU6AEt+Gn4n1lDStOtj7FKycP71A==",
            "requires": {
                "cssom": "~0.3.6"
            },
            "dependencies": {
                "cssom": {
                    "version": "0.3.8",
                    "resolved": "https://registry.npmjs.org/cssom/-/cssom-0.3.8.tgz",
                    "integrity": "sha512-b0tGHbfegbhPJpxpiBPU2sCkigAqtM9O121le6bbOlgyV+NyGyCmVfJ6QW9eRjz8CpNfWEOYBIMIGRYkLwsIYg=="
                }
            }
        },
        "dashdash": {
            "version": "1.14.1",
            "resolved": "https://registry.npmjs.org/dashdash/-/dashdash-1.14.1.tgz",
            "integrity": "sha1-hTz6D3y+L+1d4gMmuN1YEDX24vA=",
            "requires": {
                "assert-plus": "^1.0.0"
            }
        },
        "data-urls": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/data-urls/-/data-urls-2.0.0.tgz",
            "integrity": "sha512-X5eWTSXO/BJmpdIKCRuKUgSCgAN0OwliVK3yPKbwIWU1Tdw5BRajxlzMidvh+gwko9AfQ9zIj52pzF91Q3YAvQ==",
            "requires": {
                "abab": "^2.0.3",
                "whatwg-mimetype": "^2.3.0",
                "whatwg-url": "^8.0.0"
            }
        },
        "debug": {
            "version": "2.6.9",
            "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
            "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
            "requires": {
                "ms": "2.0.0"
            }
        },
        "decamelize": {
            "version": "1.2.0",
            "resolved": "https://registry.npmjs.org/decamelize/-/decamelize-1.2.0.tgz",
            "integrity": "sha1-9lNNFRSCabIDUue+4m9QH5oZEpA="
        },
        "decimal.js": {
            "version": "10.2.1",
            "resolved": "https://registry.npmjs.org/decimal.js/-/decimal.js-10.2.1.tgz",
            "integrity": "sha512-KaL7+6Fw6i5A2XSnsbhm/6B+NuEA7TZ4vqxnd5tXz9sbKtrN9Srj8ab4vKVdK8YAqZO9P1kg45Y6YLoduPf+kw=="
        },
        "decode-uri-component": {
            "version": "0.2.0",
            "resolved": "https://registry.npmjs.org/decode-uri-component/-/decode-uri-component-0.2.0.tgz",
            "integrity": "sha1-6zkTMzRYd1y4TNGh+uBiEGu4dUU="
        },
        "deep-is": {
            "version": "0.1.3",
            "resolved": "https://registry.npmjs.org/deep-is/-/deep-is-0.1.3.tgz",
            "integrity": "sha1-s2nW+128E+7PUk+RsHD+7cNXzzQ="
        },
        "deepmerge": {
            "version": "4.2.2",
            "resolved": "https://registry.npmjs.org/deepmerge/-/deepmerge-4.2.2.tgz",
            "integrity": "sha512-FJ3UgI4gIl+PHZm53knsuSFpE+nESMr7M4v9QcgB7S63Kj/6WqMiFQJpBBYz1Pt+66bZpP3Q7Lye0Oo9MPKEdg=="
        },
        "define-property": {
            "version": "2.0.2",
            "resolved": "https://registry.npmjs.org/define-property/-/define-property-2.0.2.tgz",
            "integrity": "sha512-jwK2UV4cnPpbcG7+VRARKTZPUWowwXA8bzH5NP6ud0oeAxyYPuGZUAC7hMugpCdz4BeSZl2Dl9k66CHJ/46ZYQ==",
            "requires": {
                "is-descriptor": "^1.0.2",
                "isobject": "^3.0.1"
            },
            "dependencies": {
                "is-accessor-descriptor": {
                    "version": "1.0.0",
                    "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
                    "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
                    "requires": {
                        "kind-of": "^6.0.0"
                    }
                },
                "is-data-descriptor": {
                    "version": "1.0.0",
                    "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
                    "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
                    "requires": {
                        "kind-of": "^6.0.0"
                    }
                },
                "is-descriptor": {
                    "version": "1.0.2",
                    "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",
                    "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
                    "requires": {
                        "is-accessor-descriptor": "^1.0.0",
                        "is-data-descriptor": "^1.0.0",
                        "kind-of": "^6.0.2"
                    }
                }
            }
        },
        "delayed-stream": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/delayed-stream/-/delayed-stream-1.0.0.tgz",
            "integrity": "sha1-3zrhmayt+31ECqrgsp4icrJOxhk="
        },
        "depd": {
            "version": "1.1.2",
            "resolved": "https://registry.npmjs.org/depd/-/depd-1.1.2.tgz",
            "integrity": "sha1-m81S4UwJd2PnSbJ0xDRu0uVgtak="
        },
        "destroy": {
            "version": "1.0.4",
            "resolved": "https://registry.npmjs.org/destroy/-/destroy-1.0.4.tgz",
            "integrity": "sha1-l4hXRCxEdJ5CBmE+N5RiBYJqvYA="
        },
        "detect-newline": {
            "version": "3.1.0",
            "resolved": "https://registry.npmjs.org/detect-newline/-/detect-newline-3.1.0.tgz",
            "integrity": "sha512-TLz+x/vEXm/Y7P7wn1EJFNLxYpUD4TgMosxY6fAVJUnJMbupHBOncxyWUG9OpTaH9EBD7uFI5LfEgmMOc54DsA=="
        },
        "diff-sequences": {
            "version": "26.6.2",
            "resolved": "https://registry.npmjs.org/diff-sequences/-/diff-sequences-26.6.2.tgz",
            "integrity": "sha512-Mv/TDa3nZ9sbc5soK+OoA74BsS3mL37yixCvUAQkiuA4Wz6YtwP/K47n2rv2ovzHZvoiQeA5FTQOschKkEwB0Q=="
        },
        "domexception": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/domexception/-/domexception-2.0.1.tgz",
            "integrity": "sha512-yxJ2mFy/sibVQlu5qHjOkf9J3K6zgmCxgJ94u2EdvDOV09H+32LtRswEcUsmUWN72pVLOEnTSRaIVVzVQgS0dg==",
            "requires": {
                "webidl-conversions": "^5.0.0"
            },
            "dependencies": {
                "webidl-conversions": {
                    "version": "5.0.0",
                    "resolved": "https://registry.npmjs.org/webidl-conversions/-/webidl-conversions-5.0.0.tgz",
                    "integrity": "sha512-VlZwKPCkYKxQgeSbH5EyngOmRp7Ww7I9rQLERETtf5ofd9pGeswWiOtogpEO850jziPRarreGxn5QIiTqpb2wA=="
                }
            }
        },
        "dotenv": {
            "version": "8.2.0",
            "resolved": "https://registry.npmjs.org/dotenv/-/dotenv-8.2.0.tgz",
            "integrity": "sha512-8sJ78ElpbDJBHNeBzUbUVLsqKdccaa/BXF1uPTw3GrvQTBgrQrtObr2mUrE38vzYd8cEv+m/JBfDLioYcfXoaw=="
        },
        "ecc-jsbn": {
            "version": "0.1.2",
            "resolved": "https://registry.npmjs.org/ecc-jsbn/-/ecc-jsbn-0.1.2.tgz",
            "integrity": "sha1-OoOpBOVDUyh4dMVkt1SThoSamMk=",
            "requires": {
                "jsbn": "~0.1.0",
                "safer-buffer": "^2.1.0"
            }
        },
        "ee-first": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/ee-first/-/ee-first-1.1.1.tgz",
            "integrity": "sha1-WQxhFWsK4vTwJVcyoViyZrxWsh0="
        },
        "electron-to-chromium": {
            "version": "1.3.717",
            "resolved": "https://registry.npmjs.org/electron-to-chromium/-/electron-to-chromium-1.3.717.tgz",
            "integrity": "sha512-OfzVPIqD1MkJ7fX+yTl2nKyOE4FReeVfMCzzxQS+Kp43hZYwHwThlGP+EGIZRXJsxCM7dqo8Y65NOX/HP12iXQ=="
        },
        "emittery": {
            "version": "0.7.2",
            "resolved": "https://registry.npmjs.org/emittery/-/emittery-0.7.2.tgz",
            "integrity": "sha512-A8OG5SR/ij3SsJdWDJdkkSYUjQdCUx6APQXem0SaEePBSRg4eymGYwBkKo1Y6DU+af/Jn2dBQqDBvjnr9Vi8nQ=="
        },
        "emoji-regex": {
            "version": "8.0.0",
            "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
            "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A=="
        },
        "encodeurl": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/encodeurl/-/encodeurl-1.0.2.tgz",
            "integrity": "sha1-rT/0yG7C0CkyL1oCw6mmBslbP1k="
        },
        "end-of-stream": {
            "version": "1.4.4",
            "resolved": "https://registry.npmjs.org/end-of-stream/-/end-of-stream-1.4.4.tgz",
            "integrity": "sha512-+uw1inIHVPQoaVuHzRyXd21icM+cnt4CzD5rW+NC1wjOUSTOs+Te7FOv7AhN7vS9x/oIyhLP5PR1H+phQAHu5Q==",
            "requires": {
                "once": "^1.4.0"
            }
        },
        "error-ex": {
            "version": "1.3.2",
            "resolved": "https://registry.npmjs.org/error-ex/-/error-ex-1.3.2.tgz",
            "integrity": "sha512-7dFHNmqeFSEt2ZBsCriorKnn3Z2pj+fd9kmI6QoWw4//DL+icEBfc0U7qJCisqrTsKTjw4fNFy2pW9OqStD84g==",
            "requires": {
                "is-arrayish": "^0.2.1"
            }
        },
        "escalade": {
            "version": "3.1.1",
            "resolved": "https://registry.npmjs.org/escalade/-/escalade-3.1.1.tgz",
            "integrity": "sha512-k0er2gUkLf8O0zKJiAhmkTnJlTvINGv7ygDNPbeIsX/TJjGJZHuh9B2UxbsaEkmlEo9MfhrSzmhIlhRlI2GXnw=="
        },
        "escape-html": {
            "version": "1.0.3",
            "resolved": "https://registry.npmjs.org/escape-html/-/escape-html-1.0.3.tgz",
            "integrity": "sha1-Aljq5NPQwJdN4cFpGI7wBR0dGYg="
        },
        "escape-string-regexp": {
            "version": "1.0.5",
            "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz",
            "integrity": "sha1-G2HAViGQqN/2rjuyzwIAyhMLhtQ="
        },
        "escodegen": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/escodegen/-/escodegen-2.0.0.tgz",
            "integrity": "sha512-mmHKys/C8BFUGI+MAWNcSYoORYLMdPzjrknd2Vc+bUsjN5bXcr8EhrNB+UTqfL1y3I9c4fw2ihgtMPQLBRiQxw==",
            "requires": {
                "esprima": "^4.0.1",
                "estraverse": "^5.2.0",
                "esutils": "^2.0.2",
                "optionator": "^0.8.1",
                "source-map": "~0.6.1"
            }
        },
        "esprima": {
            "version": "4.0.1",
            "resolved": "https://registry.npmjs.org/esprima/-/esprima-4.0.1.tgz",
            "integrity": "sha512-eGuFFw7Upda+g4p+QHvnW0RyTX/SVeJBDM/gCtMARO0cLuT2HcEKnTPvhjV6aGeqrCB/sbNop0Kszm0jsaWU4A=="
        },
        "estraverse": {
            "version": "5.2.0",
            "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-5.2.0.tgz",
            "integrity": "sha512-BxbNGGNm0RyRYvUdHpIwv9IWzeM9XClbOxwoATuFdOE7ZE6wHL+HQ5T8hoPM+zHvmKzzsEqhgy0GrQ5X13afiQ=="
        },
        "esutils": {
            "version": "2.0.3",
            "resolved": "https://registry.npmjs.org/esutils/-/esutils-2.0.3.tgz",
            "integrity": "sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g=="
        },
        "etag": {
            "version": "1.8.1",
            "resolved": "https://registry.npmjs.org/etag/-/etag-1.8.1.tgz",
            "integrity": "sha1-Qa4u62XvpiJorr/qg6x9eSmbCIc="
        },
        "exec-sh": {
            "version": "0.3.6",
            "resolved": "https://registry.npmjs.org/exec-sh/-/exec-sh-0.3.6.tgz",
            "integrity": "sha512-nQn+hI3yp+oD0huYhKwvYI32+JFeq+XkNcD1GAo3Y/MjxsfVGmrrzrnzjWiNY6f+pUCP440fThsFh5gZrRAU/w=="
        },
        "execa": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/execa/-/execa-1.0.0.tgz",
            "integrity": "sha512-adbxcyWV46qiHyvSp50TKt05tB4tK3HcmF7/nxfAdhnox83seTDbwnaqKO4sXRy7roHAIFqJP/Rw/AuEbX61LA==",
            "requires": {
                "cross-spawn": "^6.0.0",
                "get-stream": "^4.0.0",
                "is-stream": "^1.1.0",
                "npm-run-path": "^2.0.0",
                "p-finally": "^1.0.0",
                "signal-exit": "^3.0.0",
                "strip-eof": "^1.0.0"
            }
        },
        "exit": {
            "version": "0.1.2",
            "resolved": "https://registry.npmjs.org/exit/-/exit-0.1.2.tgz",
            "integrity": "sha1-BjJjj42HfMghB9MKD/8aF8uhzQw="
        },
        "expand-brackets": {
            "version": "2.1.4",
            "resolved": "https://registry.npmjs.org/expand-brackets/-/expand-brackets-2.1.4.tgz",
            "integrity": "sha1-t3c14xXOMPa27/D4OwQVGiJEliI=",
            "requires": {
                "debug": "^2.3.3",
                "define-property": "^0.2.5",
                "extend-shallow": "^2.0.1",
                "posix-character-classes": "^0.1.0",
                "regex-not": "^1.0.0",
                "snapdragon": "^0.8.1",
                "to-regex": "^3.0.1"
            },
            "dependencies": {
                "define-property": {
                    "version": "0.2.5",
                    "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
                    "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
                    "requires": {
                        "is-descriptor": "^0.1.0"
                    }
                },
                "extend-shallow": {
                    "version": "2.0.1",
                    "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
                    "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
                    "requires": {
                        "is-extendable": "^0.1.0"
                    }
                }
            }
        },
        "expect": {
            "version": "26.6.2",
            "resolved": "https://registry.npmjs.org/expect/-/expect-26.6.2.tgz",
            "integrity": "sha512-9/hlOBkQl2l/PLHJx6JjoDF6xPKcJEsUlWKb23rKE7KzeDqUZKXKNMW27KIue5JMdBV9HgmoJPcc8HtO85t9IA==",
            "requires": {
                "@jest/types": "^26.6.2",
                "ansi-styles": "^4.0.0",
                "jest-get-type": "^26.3.0",
                "jest-matcher-utils": "^26.6.2",
                "jest-message-util": "^26.6.2",
                "jest-regex-util": "^26.0.0"
            }
        },
        "express": {
            "version": "4.17.1",
            "resolved": "https://registry.npmjs.org/express/-/express-4.17.1.tgz",
            "integrity": "sha512-mHJ9O79RqluphRrcw2X/GTh3k9tVv8YcoyY4Kkh4WDMUYKRZUq0h1o0w2rrrxBqM7VoeUVqgb27xlEMXTnYt4g==",
            "requires": {
                "accepts": "~1.3.7",
                "array-flatten": "1.1.1",
                "body-parser": "1.19.0",
                "content-disposition": "0.5.3",
                "content-type": "~1.0.4",
                "cookie": "0.4.0",
                "cookie-signature": "1.0.6",
                "debug": "2.6.9",
                "depd": "~1.1.2",
                "encodeurl": "~1.0.2",
                "escape-html": "~1.0.3",
                "etag": "~1.8.1",
                "finalhandler": "~1.1.2",
                "fresh": "0.5.2",
                "merge-descriptors": "1.0.1",
                "methods": "~1.1.2",
                "on-finished": "~2.3.0",
                "parseurl": "~1.3.3",
                "path-to-regexp": "0.1.7",
                "proxy-addr": "~2.0.5",
                "qs": "6.7.0",
                "range-parser": "~1.2.1",
                "safe-buffer": "5.1.2",
                "send": "0.17.1",
                "serve-static": "1.14.1",
                "setprototypeof": "1.1.1",
                "statuses": "~1.5.0",
                "type-is": "~1.6.18",
                "utils-merge": "1.0.1",
                "vary": "~1.1.2"
            }
        },
        "extend": {
            "version": "3.0.2",
            "resolved": "https://registry.npmjs.org/extend/-/extend-3.0.2.tgz",
            "integrity": "sha512-fjquC59cD7CyW6urNXK0FBufkZcoiGG80wTuPujX590cB5Ttln20E2UB4S/WARVqhXffZl2LNgS+gQdPIIim/g=="
        },
        "extend-shallow": {
            "version": "3.0.2",
            "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-3.0.2.tgz",
            "integrity": "sha1-Jqcarwc7OfshJxcnRhMcJwQCjbg=",
            "requires": {
                "assign-symbols": "^1.0.0",
                "is-extendable": "^1.0.1"
            },
            "dependencies": {
                "is-extendable": {
                    "version": "1.0.1",
                    "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-1.0.1.tgz",
                    "integrity": "sha512-arnXMxT1hhoKo9k1LZdmlNyJdDDfy2v0fXjFlmok4+i8ul/6WlbVge9bhM74OpNPQPMGUToDtz+KXa1PneJxOA==",
                    "requires": {
                        "is-plain-object": "^2.0.4"
                    }
                }
            }
        },
        "extglob": {
            "version": "2.0.4",
            "resolved": "https://registry.npmjs.org/extglob/-/extglob-2.0.4.tgz",
            "integrity": "sha512-Nmb6QXkELsuBr24CJSkilo6UHHgbekK5UiZgfE6UHD3Eb27YC6oD+bhcT+tJ6cl8dmsgdQxnWlcry8ksBIBLpw==",
            "requires": {
                "array-unique": "^0.3.2",
                "define-property": "^1.0.0",
                "expand-brackets": "^2.1.4",
                "extend-shallow": "^2.0.1",
                "fragment-cache": "^0.2.1",
                "regex-not": "^1.0.0",
                "snapdragon": "^0.8.1",
                "to-regex": "^3.0.1"
            },
            "dependencies": {
                "define-property": {
                    "version": "1.0.0",
                    "resolved": "https://registry.npmjs.org/define-property/-/define-property-1.0.0.tgz",
                    "integrity": "sha1-dp66rz9KY6rTr56NMEybvnm/sOY=",
                    "requires": {
                        "is-descriptor": "^1.0.0"
                    }
                },
                "extend-shallow": {
                    "version": "2.0.1",
                    "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
                    "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
                    "requires": {
                        "is-extendable": "^0.1.0"
                    }
                },
                "is-accessor-descriptor": {
                    "version": "1.0.0",
                    "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
                    "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
                    "requires": {
                        "kind-of": "^6.0.0"
                    }
                },
                "is-data-descriptor": {
                    "version": "1.0.0",
                    "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
                    "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
                    "requires": {
                        "kind-of": "^6.0.0"
                    }
                },
                "is-descriptor": {
                    "version": "1.0.2",
                    "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",
                    "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
                    "requires": {
                        "is-accessor-descriptor": "^1.0.0",
                        "is-data-descriptor": "^1.0.0",
                        "kind-of": "^6.0.2"
                    }
                }
            }
        },
        "extsprintf": {
            "version": "1.3.0",
            "resolved": "https://registry.npmjs.org/extsprintf/-/extsprintf-1.3.0.tgz",
            "integrity": "sha1-lpGEQOMEGnpBT4xS48V06zw+HgU="
        },
        "fast-deep-equal": {
            "version": "3.1.3",
            "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.3.tgz",
            "integrity": "sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q=="
        },
        "fast-json-stable-stringify": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.1.0.tgz",
            "integrity": "sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw=="
        },
        "fast-levenshtein": {
            "version": "2.0.6",
            "resolved": "https://registry.npmjs.org/fast-levenshtein/-/fast-levenshtein-2.0.6.tgz",
            "integrity": "sha1-PYpcZog6FqMMqGQ+hR8Zuqd5eRc="
        },
        "fast-safe-stringify": {
            "version": "2.0.7",
            "resolved": "https://registry.npmjs.org/fast-safe-stringify/-/fast-safe-stringify-2.0.7.tgz",
            "integrity": "sha512-Utm6CdzT+6xsDk2m8S6uL8VHxNwI6Jub+e9NYTcAms28T84pTa25GJQV9j0CY0N1rM8hK4x6grpF2BQf+2qwVA=="
        },
        "fb-watchman": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/fb-watchman/-/fb-watchman-2.0.1.tgz",
            "integrity": "sha512-DkPJKQeY6kKwmuMretBhr7G6Vodr7bFwDYTXIkfG1gjvNpaxBTQV3PbXg6bR1c1UP4jPOX0jHUbbHANL9vRjVg==",
            "requires": {
                "bser": "2.1.1"
            }
        },
        "fill-range": {
            "version": "7.0.1",
            "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.0.1.tgz",
            "integrity": "sha512-qOo9F+dMUmC2Lcb4BbVvnKJxTPjCm+RRpe4gDuGrzkL7mEVl/djYSu2OdQ2Pa302N4oqkSg9ir6jaLWJ2USVpQ==",
            "requires": {
                "to-regex-range": "^5.0.1"
            }
        },
        "finalhandler": {
            "version": "1.1.2",
            "resolved": "https://registry.npmjs.org/finalhandler/-/finalhandler-1.1.2.tgz",
            "integrity": "sha512-aAWcW57uxVNrQZqFXjITpW3sIUQmHGG3qSb9mUah9MgMC4NeWhNOlNjXEYq3HjRAvL6arUviZGGJsBg6z0zsWA==",
            "requires": {
                "debug": "2.6.9",
                "encodeurl": "~1.0.2",
                "escape-html": "~1.0.3",
                "on-finished": "~2.3.0",
                "parseurl": "~1.3.3",
                "statuses": "~1.5.0",
                "unpipe": "~1.0.0"
            }
        },
        "find-up": {
            "version": "4.1.0",
            "resolved": "https://registry.npmjs.org/find-up/-/find-up-4.1.0.tgz",
            "integrity": "sha512-PpOwAdQ/YlXQ2vj8a3h8IipDuYRi3wceVQQGYWxNINccq40Anw7BlsEXCMbt1Zt+OLA6Fq9suIpIWD0OsnISlw==",
            "requires": {
                "locate-path": "^5.0.0",
                "path-exists": "^4.0.0"
            }
        },
        "for-in": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/for-in/-/for-in-1.0.2.tgz",
            "integrity": "sha1-gQaNKVqBQuwKxybG4iAMMPttXoA="
        },
        "forever-agent": {
            "version": "0.6.1",
            "resolved": "https://registry.npmjs.org/forever-agent/-/forever-agent-0.6.1.tgz",
            "integrity": "sha1-+8cfDEGt6zf5bFd60e1C2P2sypE="
        },
        "form-data": {
            "version": "2.3.3",
            "resolved": "https://registry.npmjs.org/form-data/-/form-data-2.3.3.tgz",
            "integrity": "sha512-1lLKB2Mu3aGP1Q/2eCOx0fNbRMe7XdwktwOruhfqqd0rIJWwN4Dh+E3hrPSlDCXnSR7UtZ1N38rVXm+6+MEhJQ==",
            "requires": {
                "asynckit": "^0.4.0",
                "combined-stream": "^1.0.6",
                "mime-types": "^2.1.12"
            }
        },
        "formidable": {
            "version": "1.2.2",
            "resolved": "https://registry.npmjs.org/formidable/-/formidable-1.2.2.tgz",
            "integrity": "sha512-V8gLm+41I/8kguQ4/o1D3RIHRmhYFG4pnNyonvua+40rqcEmT4+V71yaZ3B457xbbgCsCfjSPi65u/W6vK1U5Q=="
        },
        "forwarded": {
            "version": "0.1.2",
            "resolved": "https://registry.npmjs.org/forwarded/-/forwarded-0.1.2.tgz",
            "integrity": "sha1-mMI9qxF1ZXuMBXPozszZGw/xjIQ="
        },
        "fragment-cache": {
            "version": "0.2.1",
            "resolved": "https://registry.npmjs.org/fragment-cache/-/fragment-cache-0.2.1.tgz",
            "integrity": "sha1-QpD60n8T6Jvn8zeZxrxaCr//DRk=",
            "requires": {
                "map-cache": "^0.2.2"
            }
        },
        "fresh": {
            "version": "0.5.2",
            "resolved": "https://registry.npmjs.org/fresh/-/fresh-0.5.2.tgz",
            "integrity": "sha1-PYyt2Q2XZWn6g1qx+OSyOhBWBac="
        },
        "fs.realpath": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
            "integrity": "sha1-FQStJSMVjKpA20onh8sBQRmU6k8="
        },
        "fsevents": {
            "version": "2.3.2",
            "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.2.tgz",
            "integrity": "sha512-xiqMQR4xAeHTuB9uWm+fFRcIOgKBMiOBP+eXiyT7jsgVCq1bkVygt00oASowB7EdtpOHaaPgKt812P9ab+DDKA==",
            "optional": true
        },
        "function-bind": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.1.tgz",
            "integrity": "sha512-yIovAzMX49sF8Yl58fSCWJ5svSLuaibPxXQJFLmBObTuCr0Mf1KiPopGM9NiFjiYBCbfaa2Fh6breQ6ANVTI0A=="
        },
        "gensync": {
            "version": "1.0.0-beta.2",
            "resolved": "https://registry.npmjs.org/gensync/-/gensync-1.0.0-beta.2.tgz",
            "integrity": "sha512-3hN7NaskYvMDLQY55gnW3NQ+mesEAepTqlg+VEbj7zzqEMBVNhzcGYYeqFo/TlYz6eQiFcp1HcsCZO+nGgS8zg=="
        },
        "get-caller-file": {
            "version": "2.0.5",
            "resolved": "https://registry.npmjs.org/get-caller-file/-/get-caller-file-2.0.5.tgz",
            "integrity": "sha512-DyFP3BM/3YHTQOCUL/w0OZHR0lpKeGrxotcHWcqNEdnltqFwXVfhEBQ94eIo34AfQpo0rGki4cyIiftY06h2Fg=="
        },
        "get-intrinsic": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.1.1.tgz",
            "integrity": "sha512-kWZrnVM42QCiEA2Ig1bG8zjoIMOgxWwYCEeNdwY6Tv/cOSeGpcoX4pXHfKUxNKVoArnrEr2e9srnAxxGIraS9Q==",
            "requires": {
                "function-bind": "^1.1.1",
                "has": "^1.0.3",
                "has-symbols": "^1.0.1"
            }
        },
        "get-package-type": {
            "version": "0.1.0",
            "resolved": "https://registry.npmjs.org/get-package-type/-/get-package-type-0.1.0.tgz",
            "integrity": "sha512-pjzuKtY64GYfWizNAJ0fr9VqttZkNiK2iS430LtIHzjBEr6bX8Am2zm4sW4Ro5wjWW5cAlRL1qAMTcXbjNAO2Q=="
        },
        "get-stream": {
            "version": "4.1.0",
            "resolved": "https://registry.npmjs.org/get-stream/-/get-stream-4.1.0.tgz",
            "integrity": "sha512-GMat4EJ5161kIy2HevLlr4luNjBgvmj413KaQA7jt4V8B4RDsfpHk7WQ9GVqfYyyx8OS/L66Kox+rJRNklLK7w==",
            "requires": {
                "pump": "^3.0.0"
            }
        },
        "get-value": {
            "version": "2.0.6",
            "resolved": "https://registry.npmjs.org/get-value/-/get-value-2.0.6.tgz",
            "integrity": "sha1-3BXKHGcjh8p2vTesCjlbogQqLCg="
        },
        "getpass": {
            "version": "0.1.7",
            "resolved": "https://registry.npmjs.org/getpass/-/getpass-0.1.7.tgz",
            "integrity": "sha1-Xv+OPmhNVprkyysSgmBOi6YhSfo=",
            "requires": {
                "assert-plus": "^1.0.0"
            }
        },
        "glob": {
            "version": "7.1.6",
            "resolved": "https://registry.npmjs.org/glob/-/glob-7.1.6.tgz",
            "integrity": "sha512-LwaxwyZ72Lk7vZINtNNrywX0ZuLyStrdDtabefZKAY5ZGJhVtgdznluResxNmPitE0SAO+O26sWTHeKSI2wMBA==",
            "requires": {
                "fs.realpath": "^1.0.0",
                "inflight": "^1.0.4",
                "inherits": "2",
                "minimatch": "^3.0.4",
                "once": "^1.3.0",
                "path-is-absolute": "^1.0.0"
            }
        },
        "globals": {
            "version": "11.12.0",
            "resolved": "https://registry.npmjs.org/globals/-/globals-11.12.0.tgz",
            "integrity": "sha512-WOBp/EEGUiIsJSp7wcv/y6MO+lV9UoncWqxuFfm8eBwzWNgyfBd6Gz+IeKQ9jCmyhoH99g15M3T+QaVHFjizVA=="
        },
        "graceful-fs": {
            "version": "4.2.6",
            "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.6.tgz",
            "integrity": "sha512-nTnJ528pbqxYanhpDYsi4Rd8MAeaBA67+RZ10CM1m3bTAVFEDcd5AuA4a6W5YkGZ1iNXHzZz8T6TBKLeBuNriQ=="
        },
        "growly": {
            "version": "1.3.0",
            "resolved": "https://registry.npmjs.org/growly/-/growly-1.3.0.tgz",
            "integrity": "sha1-8QdIy+dq+WS3yWyTxrzCivEgwIE=",
            "optional": true
        },
        "har-schema": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/har-schema/-/har-schema-2.0.0.tgz",
            "integrity": "sha1-qUwiJOvKwEeCoNkDVSHyRzW37JI="
        },
        "har-validator": {
            "version": "5.1.5",
            "resolved": "https://registry.npmjs.org/har-validator/-/har-validator-5.1.5.tgz",
            "integrity": "sha512-nmT2T0lljbxdQZfspsno9hgrG3Uir6Ks5afism62poxqBM6sDnMEuPmzTq8XN0OEwqKLLdh1jQI3qyE66Nzb3w==",
            "requires": {
                "ajv": "^6.12.3",
                "har-schema": "^2.0.0"
            }
        },
        "has": {
            "version": "1.0.3",
            "resolved": "https://registry.npmjs.org/has/-/has-1.0.3.tgz",
            "integrity": "sha512-f2dvO0VU6Oej7RkWJGrehjbzMAjFp5/VKPp5tTpWIV4JHHZK1/BxbFRtf/siA2SWTe09caDmVtYYzWEIbBS4zw==",
            "requires": {
                "function-bind": "^1.1.1"
            }
        },
        "has-flag": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
            "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="
        },
        "has-symbols": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.0.2.tgz",
            "integrity": "sha512-chXa79rL/UC2KlX17jo3vRGz0azaWEx5tGqZg5pO3NUyEJVB17dMruQlzCCOfUvElghKcm5194+BCRvi2Rv/Gw=="
        },
        "has-value": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/has-value/-/has-value-1.0.0.tgz",
            "integrity": "sha1-GLKB2lhbHFxR3vJMkw7SmgvmsXc=",
            "requires": {
                "get-value": "^2.0.6",
                "has-values": "^1.0.0",
                "isobject": "^3.0.0"
            }
        },
        "has-values": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/has-values/-/has-values-1.0.0.tgz",
            "integrity": "sha1-lbC2P+whRmGab+V/51Yo1aOe/k8=",
            "requires": {
                "is-number": "^3.0.0",
                "kind-of": "^4.0.0"
            },
            "dependencies": {
                "is-number": {
                    "version": "3.0.0",
                    "resolved": "https://registry.npmjs.org/is-number/-/is-number-3.0.0.tgz",
                    "integrity": "sha1-JP1iAaR4LPUFYcgQJ2r8fRLXEZU=",
                    "requires": {
                        "kind-of": "^3.0.2"
                    },
                    "dependencies": {
                        "kind-of": {
                            "version": "3.2.2",
                            "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
                            "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
                            "requires": {
                                "is-buffer": "^1.1.5"
                            }
                        }
                    }
                },
                "kind-of": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-4.0.0.tgz",
                    "integrity": "sha1-IIE989cSkosgc3hpGkUGb65y3Vc=",
                    "requires": {
                        "is-buffer": "^1.1.5"
                    }
                }
            }
        },
        "hosted-git-info": {
            "version": "2.8.9",
            "resolved": "https://registry.npmjs.org/hosted-git-info/-/hosted-git-info-2.8.9.tgz",
            "integrity": "sha512-mxIDAb9Lsm6DoOJ7xH+5+X4y1LU/4Hi50L9C5sIswK3JzULS4bwk1FvjdBgvYR4bzT4tuUQiC15FE2f5HbLvYw=="
        },
        "html-encoding-sniffer": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/html-encoding-sniffer/-/html-encoding-sniffer-2.0.1.tgz",
            "integrity": "sha512-D5JbOMBIR/TVZkubHT+OyT2705QvogUW4IBn6nHd756OwieSF9aDYFj4dv6HHEVGYbHaLETa3WggZYWWMyy3ZQ==",
            "requires": {
                "whatwg-encoding": "^1.0.5"
            }
        },
        "html-escaper": {
            "version": "2.0.2",
            "resolved": "https://registry.npmjs.org/html-escaper/-/html-escaper-2.0.2.tgz",
            "integrity": "sha512-H2iMtd0I4Mt5eYiapRdIDjp+XzelXQ0tFE4JS7YFwFevXXMmOp9myNrUvCg0D6ws8iqkRPBfKHgbwig1SmlLfg=="
        },
        "http-errors": {
            "version": "1.7.2",
            "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-1.7.2.tgz",
            "integrity": "sha512-uUQBt3H/cSIVfch6i1EuPNy/YsRSOUBXTVfZ+yR7Zjez3qjBz6i9+i4zjNaoqcoFVI4lQJ5plg63TvGfRSDCRg==",
            "requires": {
                "depd": "~1.1.2",
                "inherits": "2.0.3",
                "setprototypeof": "1.1.1",
                "statuses": ">= 1.5.0 < 2",
                "toidentifier": "1.0.0"
            }
        },
        "http-signature": {
            "version": "1.2.0",
            "resolved": "https://registry.npmjs.org/http-signature/-/http-signature-1.2.0.tgz",
            "integrity": "sha1-muzZJRFHcvPZW2WmCruPfBj7rOE=",
            "requires": {
                "assert-plus": "^1.0.0",
                "jsprim": "^1.2.2",
                "sshpk": "^1.7.0"
            }
        },
        "human-signals": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/human-signals/-/human-signals-1.1.1.tgz",
            "integrity": "sha512-SEQu7vl8KjNL2eoGBLF3+wAjpsNfA9XMlXAYj/3EdaNfAlxKthD1xjEQfGOUhllCGGJVNY34bRr6lPINhNjyZw=="
        },
        "iconv-lite": {
            "version": "0.4.24",
            "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.24.tgz",
            "integrity": "sha512-v3MXnZAcvnywkTUEZomIActle7RXXeedOR31wwl7VlyoXO4Qi9arvSenNQWne1TcRwhCL1HwLI21bEqdpj8/rA==",
            "requires": {
                "safer-buffer": ">= 2.1.2 < 3"
            }
        },
        "import-local": {
            "version": "3.0.2",
            "resolved": "https://registry.npmjs.org/import-local/-/import-local-3.0.2.tgz",
            "integrity": "sha512-vjL3+w0oulAVZ0hBHnxa/Nm5TAurf9YLQJDhqRZyqb+VKGOB6LU8t9H1Nr5CIo16vh9XfJTOoHwU0B71S557gA==",
            "requires": {
                "pkg-dir": "^4.2.0",
                "resolve-cwd": "^3.0.0"
            }
        },
        "imurmurhash": {
            "version": "0.1.4",
            "resolved": "https://registry.npmjs.org/imurmurhash/-/imurmurhash-0.1.4.tgz",
            "integrity": "sha1-khi5srkoojixPcT7a21XbyMUU+o="
        },
        "inflight": {
            "version": "1.0.6",
            "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
            "integrity": "sha1-Sb1jMdfQLQwJvJEKEHW6gWW1bfk=",
            "requires": {
                "once": "^1.3.0",
                "wrappy": "1"
            }
        },
        "inherits": {
            "version": "2.0.3",
            "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.3.tgz",
            "integrity": "sha1-Yzwsg+PaQqUC9SRmAiSA9CCCYd4="
        },
        "ipaddr.js": {
            "version": "1.9.1",
            "resolved": "https://registry.npmjs.org/ipaddr.js/-/ipaddr.js-1.9.1.tgz",
            "integrity": "sha512-0KI/607xoxSToH7GjN1FfSbLoU0+btTicjsQSWQlh/hZykN8KpmMf7uYwPW3R+akZ6R/w18ZlXSHBYXiYUPO3g=="
        },
        "is-accessor-descriptor": {
            "version": "0.1.6",
            "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-0.1.6.tgz",
            "integrity": "sha1-qeEss66Nh2cn7u84Q/igiXtcmNY=",
            "requires": {
                "kind-of": "^3.0.2"
            },
            "dependencies": {
                "kind-of": {
                    "version": "3.2.2",
                    "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
                    "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
                    "requires": {
                        "is-buffer": "^1.1.5"
                    }
                }
            }
        },
        "is-arrayish": {
            "version": "0.2.1",
            "resolved": "https://registry.npmjs.org/is-arrayish/-/is-arrayish-0.2.1.tgz",
            "integrity": "sha1-d8mYQFJ6qOyxqLppe4BkWnqSap0="
        },
        "is-buffer": {
            "version": "1.1.6",
            "resolved": "https://registry.npmjs.org/is-buffer/-/is-buffer-1.1.6.tgz",
            "integrity": "sha512-NcdALwpXkTm5Zvvbk7owOUSvVvBKDgKP5/ewfXEznmQFfs4ZRmanOeKBTjRVjka3QFoN6XJ+9F3USqfHqTaU5w=="
        },
        "is-ci": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/is-ci/-/is-ci-2.0.0.tgz",
            "integrity": "sha512-YfJT7rkpQB0updsdHLGWrvhBJfcfzNNawYDNIyQXJz0IViGf75O8EBPKSdvw2rF+LGCsX4FZ8tcr3b19LcZq4w==",
            "requires": {
                "ci-info": "^2.0.0"
            }
        },
        "is-core-module": {
            "version": "2.2.0",
            "resolved": "https://registry.npmjs.org/is-core-module/-/is-core-module-2.2.0.tgz",
            "integrity": "sha512-XRAfAdyyY5F5cOXn7hYQDqh2Xmii+DEfIcQGxK/uNwMHhIkPWO0g8msXcbzLe+MpGoR951MlqM/2iIlU4vKDdQ==",
            "requires": {
                "has": "^1.0.3"
            }
        },
        "is-data-descriptor": {
            "version": "0.1.4",
            "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-0.1.4.tgz",
            "integrity": "sha1-C17mSDiOLIYCgueT8YVv7D8wG1Y=",
            "requires": {
                "kind-of": "^3.0.2"
            },
            "dependencies": {
                "kind-of": {
                    "version": "3.2.2",
                    "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
                    "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
                    "requires": {
                        "is-buffer": "^1.1.5"
                    }
                }
            }
        },
        "is-descriptor": {
            "version": "0.1.6",
            "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-0.1.6.tgz",
            "integrity": "sha512-avDYr0SB3DwO9zsMov0gKCESFYqCnE4hq/4z3TdUlukEy5t9C0YRq7HLrsN52NAcqXKaepeCD0n+B0arnVG3Hg==",
            "requires": {
                "is-accessor-descriptor": "^0.1.6",
                "is-data-descriptor": "^0.1.4",
                "kind-of": "^5.0.0"
            },
            "dependencies": {
                "kind-of": {
                    "version": "5.1.0",
                    "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-5.1.0.tgz",
                    "integrity": "sha512-NGEErnH6F2vUuXDh+OlbcKW7/wOcfdRHaZ7VWtqCztfHri/++YKmP51OdWeGPuqCOba6kk2OTe5d02VmTB80Pw=="
                }
            }
        },
        "is-docker": {
            "version": "2.2.1",
            "resolved": "https://registry.npmjs.org/is-docker/-/is-docker-2.2.1.tgz",
            "integrity": "sha512-F+i2BKsFrH66iaUFc0woD8sLy8getkwTwtOBjvs56Cx4CgJDeKQeqfz8wAYiSb8JOprWhHH5p77PbmYCvvUuXQ==",
            "optional": true
        },
        "is-extendable": {
            "version": "0.1.1",
            "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-0.1.1.tgz",
            "integrity": "sha1-YrEQ4omkcUGOPsNqYX1HLjAd/Ik="
        },
        "is-fullwidth-code-point": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
            "integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg=="
        },
        "is-generator-fn": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/is-generator-fn/-/is-generator-fn-2.1.0.tgz",
            "integrity": "sha512-cTIB4yPYL/Grw0EaSzASzg6bBy9gqCofvWN8okThAYIxKJZC+udlRAmGbM0XLeniEJSs8uEgHPGuHSe1XsOLSQ=="
        },
        "is-number": {
            "version": "7.0.0",
            "resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
            "integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng=="
        },
        "is-plain-object": {
            "version": "2.0.4",
            "resolved": "https://registry.npmjs.org/is-plain-object/-/is-plain-object-2.0.4.tgz",
            "integrity": "sha512-h5PpgXkWitc38BBMYawTYMWJHFZJVnBquFE57xFpjB8pJFiF6gZ+bU+WyI/yqXiFR5mdLsgYNaPe8uao6Uv9Og==",
            "requires": {
                "isobject": "^3.0.1"
            }
        },
        "is-potential-custom-element-name": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/is-potential-custom-element-name/-/is-potential-custom-element-name-1.0.1.tgz",
            "integrity": "sha512-bCYeRA2rVibKZd+s2625gGnGF/t7DSqDs4dP7CrLA1m7jKWz6pps0LpYLJN8Q64HtmPKJ1hrN3nzPNKFEKOUiQ=="
        },
        "is-stream": {
            "version": "1.1.0",
            "resolved": "https://registry.npmjs.org/is-stream/-/is-stream-1.1.0.tgz",
            "integrity": "sha1-EtSj3U5o4Lec6428hBc66A2RykQ="
        },
        "is-typedarray": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/is-typedarray/-/is-typedarray-1.0.0.tgz",
            "integrity": "sha1-5HnICFjfDBsR3dppQPlgEfzaSpo="
        },
        "is-windows": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/is-windows/-/is-windows-1.0.2.tgz",
            "integrity": "sha512-eXK1UInq2bPmjyX6e3VHIzMLobc4J94i4AWn+Hpq3OU5KkrRC96OAcR3PRJ/pGu6m8TRnBHP9dkXQVsT/COVIA=="
        },
        "is-wsl": {
            "version": "2.2.0",
            "resolved": "https://registry.npmjs.org/is-wsl/-/is-wsl-2.2.0.tgz",
            "integrity": "sha512-fKzAra0rGJUUBwGBgNkHZuToZcn+TtXHpeCgmkMJMMYx1sQDYaCSyjJBSCa2nH1DGm7s3n1oBnohoVTBaN7Lww==",
            "optional": true,
            "requires": {
                "is-docker": "^2.0.0"
            }
        },
        "isarray": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz",
            "integrity": "sha1-u5NdSFgsuhaMBoNJV6VKPgcSTxE="
        },
        "isexe": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
            "integrity": "sha1-6PvzdNxVb/iUehDcsFctYz8s+hA="
        },
        "isobject": {
            "version": "3.0.1",
            "resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",
            "integrity": "sha1-TkMekrEalzFjaqH5yNHMvP2reN8="
        },
        "isstream": {
            "version": "0.1.2",
            "resolved": "https://registry.npmjs.org/isstream/-/isstream-0.1.2.tgz",
            "integrity": "sha1-R+Y/evVa+m+S4VAOaQ64uFKcCZo="
        },
        "istanbul-lib-coverage": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/istanbul-lib-coverage/-/istanbul-lib-coverage-3.0.0.tgz",
            "integrity": "sha512-UiUIqxMgRDET6eR+o5HbfRYP1l0hqkWOs7vNxC/mggutCMUIhWMm8gAHb8tHlyfD3/l6rlgNA5cKdDzEAf6hEg=="
        },
        "istanbul-lib-instrument": {
            "version": "4.0.3",
            "resolved": "https://registry.npmjs.org/istanbul-lib-instrument/-/istanbul-lib-instrument-4.0.3.tgz",
            "integrity": "sha512-BXgQl9kf4WTCPCCpmFGoJkz/+uhvm7h7PFKUYxh7qarQd3ER33vHG//qaE8eN25l07YqZPpHXU9I09l/RD5aGQ==",
            "requires": {
                "@babel/core": "^7.7.5",
                "@istanbuljs/schema": "^0.1.2",
                "istanbul-lib-coverage": "^3.0.0",
                "semver": "^6.3.0"
            }
        },
        "istanbul-lib-report": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/istanbul-lib-report/-/istanbul-lib-report-3.0.0.tgz",
            "integrity": "sha512-wcdi+uAKzfiGT2abPpKZ0hSU1rGQjUQnLvtY5MpQ7QCTahD3VODhcu4wcfY1YtkGaDD5yuydOLINXsfbus9ROw==",
            "requires": {
                "istanbul-lib-coverage": "^3.0.0",
                "make-dir": "^3.0.0",
                "supports-color": "^7.1.0"
            }
        },
        "istanbul-lib-source-maps": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/istanbul-lib-source-maps/-/istanbul-lib-source-maps-4.0.0.tgz",
            "integrity": "sha512-c16LpFRkR8vQXyHZ5nLpY35JZtzj1PQY1iZmesUbf1FZHbIupcWfjgOXBY9YHkLEQ6puz1u4Dgj6qmU/DisrZg==",
            "requires": {
                "debug": "^4.1.1",
                "istanbul-lib-coverage": "^3.0.0",
                "source-map": "^0.6.1"
            },
            "dependencies": {
                "debug": {
                    "version": "4.3.1",
                    "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.1.tgz",
                    "integrity": "sha512-doEwdvm4PCeK4K3RQN2ZC2BYUBaxwLARCqZmMjtF8a51J2Rb0xpVloFRnCODwqjpwnAoao4pelN8l3RJdv3gRQ==",
                    "requires": {
                        "ms": "2.1.2"
                    }
                },
                "ms": {
                    "version": "2.1.2",
                    "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
                    "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w=="
                }
            }
        },
        "istanbul-reports": {
            "version": "3.0.2",
            "resolved": "https://registry.npmjs.org/istanbul-reports/-/istanbul-reports-3.0.2.tgz",
            "integrity": "sha512-9tZvz7AiR3PEDNGiV9vIouQ/EAcqMXFmkcA1CDFTwOB98OZVDL0PH9glHotf5Ugp6GCOTypfzGWI/OqjWNCRUw==",
            "requires": {
                "html-escaper": "^2.0.0",
                "istanbul-lib-report": "^3.0.0"
            }
        },
        "jest": {
            "version": "26.6.3",
            "resolved": "https://registry.npmjs.org/jest/-/jest-26.6.3.tgz",
            "integrity": "sha512-lGS5PXGAzR4RF7V5+XObhqz2KZIDUA1yD0DG6pBVmy10eh0ZIXQImRuzocsI/N2XZ1GrLFwTS27In2i2jlpq1Q==",
            "requires": {
                "@jest/core": "^26.6.3",
                "import-local": "^3.0.2",
                "jest-cli": "^26.6.3"
            },
            "dependencies": {
                "jest-cli": {
                    "version": "26.6.3",
                    "resolved": "https://registry.npmjs.org/jest-cli/-/jest-cli-26.6.3.tgz",
                    "integrity": "sha512-GF9noBSa9t08pSyl3CY4frMrqp+aQXFGFkf5hEPbh/pIUFYWMK6ZLTfbmadxJVcJrdRoChlWQsA2VkJcDFK8hg==",
                    "requires": {
                        "@jest/core": "^26.6.3",
                        "@jest/test-result": "^26.6.2",
                        "@jest/types": "^26.6.2",
                        "chalk": "^4.0.0",
                        "exit": "^0.1.2",
                        "graceful-fs": "^4.2.4",
                        "import-local": "^3.0.2",
                        "is-ci": "^2.0.0",
                        "jest-config": "^26.6.3",
                        "jest-util": "^26.6.2",
                        "jest-validate": "^26.6.2",
                        "prompts": "^2.0.1",
                        "yargs": "^15.4.1"
                    }
                }
            }
        },
        "jest-changed-files": {
            "version": "26.6.2",
            "resolved": "https://registry.npmjs.org/jest-changed-files/-/jest-changed-files-26.6.2.tgz",
            "integrity": "sha512-fDS7szLcY9sCtIip8Fjry9oGf3I2ht/QT21bAHm5Dmf0mD4X3ReNUf17y+bO6fR8WgbIZTlbyG1ak/53cbRzKQ==",
            "requires": {
                "@jest/types": "^26.6.2",
                "execa": "^4.0.0",
                "throat": "^5.0.0"
            },
            "dependencies": {
                "cross-spawn": {
                    "version": "7.0.3",
                    "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-7.0.3.tgz",
                    "integrity": "sha512-iRDPJKUPVEND7dHPO8rkbOnPpyDygcDFtWjpeWNCgy8WP2rXcxXL8TskReQl6OrB2G7+UJrags1q15Fudc7G6w==",
                    "requires": {
                        "path-key": "^3.1.0",
                        "shebang-command": "^2.0.0",
                        "which": "^2.0.1"
                    }
                },
                "execa": {
                    "version": "4.1.0",
                    "resolved": "https://registry.npmjs.org/execa/-/execa-4.1.0.tgz",
                    "integrity": "sha512-j5W0//W7f8UxAn8hXVnwG8tLwdiUy4FJLcSupCg6maBYZDpyBvTApK7KyuI4bKj8KOh1r2YH+6ucuYtJv1bTZA==",
                    "requires": {
                        "cross-spawn": "^7.0.0",
                        "get-stream": "^5.0.0",
                        "human-signals": "^1.1.1",
                        "is-stream": "^2.0.0",
                        "merge-stream": "^2.0.0",
                        "npm-run-path": "^4.0.0",
                        "onetime": "^5.1.0",
                        "signal-exit": "^3.0.2",
                        "strip-final-newline": "^2.0.0"
                    }
                },
                "get-stream": {
                    "version": "5.2.0",
                    "resolved": "https://registry.npmjs.org/get-stream/-/get-stream-5.2.0.tgz",
                    "integrity": "sha512-nBF+F1rAZVCu/p7rjzgA+Yb4lfYXrpl7a6VmJrU8wF9I1CKvP/QwPNZHnOlwbTkY6dvtFIzFMSyQXbLoTQPRpA==",
                    "requires": {
                        "pump": "^3.0.0"
                    }
                },
                "is-stream": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/is-stream/-/is-stream-2.0.0.tgz",
                    "integrity": "sha512-XCoy+WlUr7d1+Z8GgSuXmpuUFC9fOhRXglJMx+dwLKTkL44Cjd4W1Z5P+BQZpr+cR93aGP4S/s7Ftw6Nd/kiEw=="
                },
                "npm-run-path": {
                    "version": "4.0.1",
                    "resolved": "https://registry.npmjs.org/npm-run-path/-/npm-run-path-4.0.1.tgz",
                    "integrity": "sha512-S48WzZW777zhNIrn7gxOlISNAqi9ZC/uQFnRdbeIHhZhCA6UqpkOT8T1G7BvfdgP4Er8gF4sUbaS0i7QvIfCWw==",
                    "requires": {
                        "path-key": "^3.0.0"
                    }
                },
                "path-key": {
                    "version": "3.1.1",
                    "resolved": "https://registry.npmjs.org/path-key/-/path-key-3.1.1.tgz",
                    "integrity": "sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q=="
                },
                "shebang-command": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-2.0.0.tgz",
                    "integrity": "sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==",
                    "requires": {
                        "shebang-regex": "^3.0.0"
                    }
                },
                "shebang-regex": {
                    "version": "3.0.0",
                    "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-3.0.0.tgz",
                    "integrity": "sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A=="
                },
                "which": {
                    "version": "2.0.2",
                    "resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
                    "integrity": "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==",
                    "requires": {
                        "isexe": "^2.0.0"
                    }
                }
            }
        },
        "jest-config": {
            "version": "26.6.3",
            "resolved": "https://registry.npmjs.org/jest-config/-/jest-config-26.6.3.tgz",
            "integrity": "sha512-t5qdIj/bCj2j7NFVHb2nFB4aUdfucDn3JRKgrZnplb8nieAirAzRSHP8uDEd+qV6ygzg9Pz4YG7UTJf94LPSyg==",
            "requires": {
                "@babel/core": "^7.1.0",
                "@jest/test-sequencer": "^26.6.3",
                "@jest/types": "^26.6.2",
                "babel-jest": "^26.6.3",
                "chalk": "^4.0.0",
                "deepmerge": "^4.2.2",
                "glob": "^7.1.1",
                "graceful-fs": "^4.2.4",
                "jest-environment-jsdom": "^26.6.2",
                "jest-environment-node": "^26.6.2",
                "jest-get-type": "^26.3.0",
                "jest-jasmine2": "^26.6.3",
                "jest-regex-util": "^26.0.0",
                "jest-resolve": "^26.6.2",
                "jest-util": "^26.6.2",
                "jest-validate": "^26.6.2",
                "micromatch": "^4.0.2",
                "pretty-format": "^26.6.2"
            }
        },
        "jest-diff": {
            "version": "26.6.2",
            "resolved": "https://registry.npmjs.org/jest-diff/-/jest-diff-26.6.2.tgz",
            "integrity": "sha512-6m+9Z3Gv9wN0WFVasqjCL/06+EFCMTqDEUl/b87HYK2rAPTyfz4ZIuSlPhY51PIQRWx5TaxeF1qmXKe9gfN3sA==",
            "requires": {
                "chalk": "^4.0.0",
                "diff-sequences": "^26.6.2",
                "jest-get-type": "^26.3.0",
                "pretty-format": "^26.6.2"
            }
        },
        "jest-docblock": {
            "version": "26.0.0",
            "resolved": "https://registry.npmjs.org/jest-docblock/-/jest-docblock-26.0.0.tgz",
            "integrity": "sha512-RDZ4Iz3QbtRWycd8bUEPxQsTlYazfYn/h5R65Fc6gOfwozFhoImx+affzky/FFBuqISPTqjXomoIGJVKBWoo0w==",
            "requires": {
                "detect-newline": "^3.0.0"
            }
        },
        "jest-each": {
            "version": "26.6.2",
            "resolved": "https://registry.npmjs.org/jest-each/-/jest-each-26.6.2.tgz",
            "integrity": "sha512-Mer/f0KaATbjl8MCJ+0GEpNdqmnVmDYqCTJYTvoo7rqmRiDllmp2AYN+06F93nXcY3ur9ShIjS+CO/uD+BbH4A==",
            "requires": {
                "@jest/types": "^26.6.2",
                "chalk": "^4.0.0",
                "jest-get-type": "^26.3.0",
                "jest-util": "^26.6.2",
                "pretty-format": "^26.6.2"
            }
        },
        "jest-environment-jsdom": {
            "version": "26.6.2",
            "resolved": "https://registry.npmjs.org/jest-environment-jsdom/-/jest-environment-jsdom-26.6.2.tgz",
            "integrity": "sha512-jgPqCruTlt3Kwqg5/WVFyHIOJHsiAvhcp2qiR2QQstuG9yWox5+iHpU3ZrcBxW14T4fe5Z68jAfLRh7joCSP2Q==",
            "requires": {
                "@jest/environment": "^26.6.2",
                "@jest/fake-timers": "^26.6.2",
                "@jest/types": "^26.6.2",
                "@types/node": "*",
                "jest-mock": "^26.6.2",
                "jest-util": "^26.6.2",
                "jsdom": "^16.4.0"
            }
        },
        "jest-environment-node": {
            "version": "26.6.2",
            "resolved": "https://registry.npmjs.org/jest-environment-node/-/jest-environment-node-26.6.2.tgz",
            "integrity": "sha512-zhtMio3Exty18dy8ee8eJ9kjnRyZC1N4C1Nt/VShN1apyXc8rWGtJ9lI7vqiWcyyXS4BVSEn9lxAM2D+07/Tag==",
            "requires": {
                "@jest/environment": "^26.6.2",
                "@jest/fake-timers": "^26.6.2",
                "@jest/types": "^26.6.2",
                "@types/node": "*",
                "jest-mock": "^26.6.2",
                "jest-util": "^26.6.2"
            }
        },
        "jest-get-type": {
            "version": "26.3.0",
            "resolved": "https://registry.npmjs.org/jest-get-type/-/jest-get-type-26.3.0.tgz",
            "integrity": "sha512-TpfaviN1R2pQWkIihlfEanwOXK0zcxrKEE4MlU6Tn7keoXdN6/3gK/xl0yEh8DOunn5pOVGKf8hB4R9gVh04ig=="
        },
        "jest-haste-map": {
            "version": "26.6.2",
            "resolved": "https://registry.npmjs.org/jest-haste-map/-/jest-haste-map-26.6.2.tgz",
            "integrity": "sha512-easWIJXIw71B2RdR8kgqpjQrbMRWQBgiBwXYEhtGUTaX+doCjBheluShdDMeR8IMfJiTqH4+zfhtg29apJf/8w==",
            "requires": {
                "@jest/types": "^26.6.2",
                "@types/graceful-fs": "^4.1.2",
                "@types/node": "*",
                "anymatch": "^3.0.3",
                "fb-watchman": "^2.0.0",
                "fsevents": "^2.1.2",
                "graceful-fs": "^4.2.4",
                "jest-regex-util": "^26.0.0",
                "jest-serializer": "^26.6.2",
                "jest-util": "^26.6.2",
                "jest-worker": "^26.6.2",
                "micromatch": "^4.0.2",
                "sane": "^4.0.3",
                "walker": "^1.0.7"
            }
        },
        "jest-jasmine2": {
            "version": "26.6.3",
            "resolved": "https://registry.npmjs.org/jest-jasmine2/-/jest-jasmine2-26.6.3.tgz",
            "integrity": "sha512-kPKUrQtc8aYwBV7CqBg5pu+tmYXlvFlSFYn18ev4gPFtrRzB15N2gW/Roew3187q2w2eHuu0MU9TJz6w0/nPEg==",
            "requires": {
                "@babel/traverse": "^7.1.0",
                "@jest/environment": "^26.6.2",
                "@jest/source-map": "^26.6.2",
                "@jest/test-result": "^26.6.2",
                "@jest/types": "^26.6.2",
                "@types/node": "*",
                "chalk": "^4.0.0",
                "co": "^4.6.0",
                "expect": "^26.6.2",
                "is-generator-fn": "^2.0.0",
                "jest-each": "^26.6.2",
                "jest-matcher-utils": "^26.6.2",
                "jest-message-util": "^26.6.2",
                "jest-runtime": "^26.6.3",
                "jest-snapshot": "^26.6.2",
                "jest-util": "^26.6.2",
                "pretty-format": "^26.6.2",
                "throat": "^5.0.0"
            }
        },
        "jest-leak-detector": {
            "version": "26.6.2",
            "resolved": "https://registry.npmjs.org/jest-leak-detector/-/jest-leak-detector-26.6.2.tgz",
            "integrity": "sha512-i4xlXpsVSMeKvg2cEKdfhh0H39qlJlP5Ex1yQxwF9ubahboQYMgTtz5oML35AVA3B4Eu+YsmwaiKVev9KCvLxg==",
            "requires": {
                "jest-get-type": "^26.3.0",
                "pretty-format": "^26.6.2"
            }
        },
        "jest-matcher-utils": {
            "version": "26.6.2",
            "resolved": "https://registry.npmjs.org/jest-matcher-utils/-/jest-matcher-utils-26.6.2.tgz",
            "integrity": "sha512-llnc8vQgYcNqDrqRDXWwMr9i7rS5XFiCwvh6DTP7Jqa2mqpcCBBlpCbn+trkG0KNhPu/h8rzyBkriOtBstvWhw==",
            "requires": {
                "chalk": "^4.0.0",
                "jest-diff": "^26.6.2",
                "jest-get-type": "^26.3.0",
                "pretty-format": "^26.6.2"
            }
        },
        "jest-message-util": {
            "version": "26.6.2",
            "resolved": "https://registry.npmjs.org/jest-message-util/-/jest-message-util-26.6.2.tgz",
            "integrity": "sha512-rGiLePzQ3AzwUshu2+Rn+UMFk0pHN58sOG+IaJbk5Jxuqo3NYO1U2/MIR4S1sKgsoYSXSzdtSa0TgrmtUwEbmA==",
            "requires": {
                "@babel/code-frame": "^7.0.0",
                "@jest/types": "^26.6.2",
                "@types/stack-utils": "^2.0.0",
                "chalk": "^4.0.0",
                "graceful-fs": "^4.2.4",
                "micromatch": "^4.0.2",
                "pretty-format": "^26.6.2",
                "slash": "^3.0.0",
                "stack-utils": "^2.0.2"
            }
        },
        "jest-mock": {
            "version": "26.6.2",
            "resolved": "https://registry.npmjs.org/jest-mock/-/jest-mock-26.6.2.tgz",
            "integrity": "sha512-YyFjePHHp1LzpzYcmgqkJ0nm0gg/lJx2aZFzFy1S6eUqNjXsOqTK10zNRff2dNfssgokjkG65OlWNcIlgd3zew==",
            "requires": {
                "@jest/types": "^26.6.2",
                "@types/node": "*"
            }
        },
        "jest-pnp-resolver": {
            "version": "1.2.2",
            "resolved": "https://registry.npmjs.org/jest-pnp-resolver/-/jest-pnp-resolver-1.2.2.tgz",
            "integrity": "sha512-olV41bKSMm8BdnuMsewT4jqlZ8+3TCARAXjZGT9jcoSnrfUnRCqnMoF9XEeoWjbzObpqF9dRhHQj0Xb9QdF6/w=="
        },
        "jest-regex-util": {
            "version": "26.0.0",
            "resolved": "https://registry.npmjs.org/jest-regex-util/-/jest-regex-util-26.0.0.tgz",
            "integrity": "sha512-Gv3ZIs/nA48/Zvjrl34bf+oD76JHiGDUxNOVgUjh3j890sblXryjY4rss71fPtD/njchl6PSE2hIhvyWa1eT0A=="
        },
        "jest-resolve": {
            "version": "26.6.2",
            "resolved": "https://registry.npmjs.org/jest-resolve/-/jest-resolve-26.6.2.tgz",
            "integrity": "sha512-sOxsZOq25mT1wRsfHcbtkInS+Ek7Q8jCHUB0ZUTP0tc/c41QHriU/NunqMfCUWsL4H3MHpvQD4QR9kSYhS7UvQ==",
            "requires": {
                "@jest/types": "^26.6.2",
                "chalk": "^4.0.0",
                "graceful-fs": "^4.2.4",
                "jest-pnp-resolver": "^1.2.2",
                "jest-util": "^26.6.2",
                "read-pkg-up": "^7.0.1",
                "resolve": "^1.18.1",
                "slash": "^3.0.0"
            }
        },
        "jest-resolve-dependencies": {
            "version": "26.6.3",
            "resolved": "https://registry.npmjs.org/jest-resolve-dependencies/-/jest-resolve-dependencies-26.6.3.tgz",
            "integrity": "sha512-pVwUjJkxbhe4RY8QEWzN3vns2kqyuldKpxlxJlzEYfKSvY6/bMvxoFrYYzUO1Gx28yKWN37qyV7rIoIp2h8fTg==",
            "requires": {
                "@jest/types": "^26.6.2",
                "jest-regex-util": "^26.0.0",
                "jest-snapshot": "^26.6.2"
            }
        },
        "jest-runner": {
            "version": "26.6.3",
            "resolved": "https://registry.npmjs.org/jest-runner/-/jest-runner-26.6.3.tgz",
            "integrity": "sha512-atgKpRHnaA2OvByG/HpGA4g6CSPS/1LK0jK3gATJAoptC1ojltpmVlYC3TYgdmGp+GLuhzpH30Gvs36szSL2JQ==",
            "requires": {
                "@jest/console": "^26.6.2",
                "@jest/environment": "^26.6.2",
                "@jest/test-result": "^26.6.2",
                "@jest/types": "^26.6.2",
                "@types/node": "*",
                "chalk": "^4.0.0",
                "emittery": "^0.7.1",
                "exit": "^0.1.2",
                "graceful-fs": "^4.2.4",
                "jest-config": "^26.6.3",
                "jest-docblock": "^26.0.0",
                "jest-haste-map": "^26.6.2",
                "jest-leak-detector": "^26.6.2",
                "jest-message-util": "^26.6.2",
                "jest-resolve": "^26.6.2",
                "jest-runtime": "^26.6.3",
                "jest-util": "^26.6.2",
                "jest-worker": "^26.6.2",
                "source-map-support": "^0.5.6",
                "throat": "^5.0.0"
            }
        },
        "jest-runtime": {
            "version": "26.6.3",
            "resolved": "https://registry.npmjs.org/jest-runtime/-/jest-runtime-26.6.3.tgz",
            "integrity": "sha512-lrzyR3N8sacTAMeonbqpnSka1dHNux2uk0qqDXVkMv2c/A3wYnvQ4EXuI013Y6+gSKSCxdaczvf4HF0mVXHRdw==",
            "requires": {
                "@jest/console": "^26.6.2",
                "@jest/environment": "^26.6.2",
                "@jest/fake-timers": "^26.6.2",
                "@jest/globals": "^26.6.2",
                "@jest/source-map": "^26.6.2",
                "@jest/test-result": "^26.6.2",
                "@jest/transform": "^26.6.2",
                "@jest/types": "^26.6.2",
                "@types/yargs": "^15.0.0",
                "chalk": "^4.0.0",
                "cjs-module-lexer": "^0.6.0",
                "collect-v8-coverage": "^1.0.0",
                "exit": "^0.1.2",
                "glob": "^7.1.3",
                "graceful-fs": "^4.2.4",
                "jest-config": "^26.6.3",
                "jest-haste-map": "^26.6.2",
                "jest-message-util": "^26.6.2",
                "jest-mock": "^26.6.2",
                "jest-regex-util": "^26.0.0",
                "jest-resolve": "^26.6.2",
                "jest-snapshot": "^26.6.2",
                "jest-util": "^26.6.2",
                "jest-validate": "^26.6.2",
                "slash": "^3.0.0",
                "strip-bom": "^4.0.0",
                "yargs": "^15.4.1"
            }
        },
        "jest-serializer": {
            "version": "26.6.2",
            "resolved": "https://registry.npmjs.org/jest-serializer/-/jest-serializer-26.6.2.tgz",
            "integrity": "sha512-S5wqyz0DXnNJPd/xfIzZ5Xnp1HrJWBczg8mMfMpN78OJ5eDxXyf+Ygld9wX1DnUWbIbhM1YDY95NjR4CBXkb2g==",
            "requires": {
                "@types/node": "*",
                "graceful-fs": "^4.2.4"
            }
        },
        "jest-snapshot": {
            "version": "26.6.2",
            "resolved": "https://registry.npmjs.org/jest-snapshot/-/jest-snapshot-26.6.2.tgz",
            "integrity": "sha512-OLhxz05EzUtsAmOMzuupt1lHYXCNib0ECyuZ/PZOx9TrZcC8vL0x+DUG3TL+GLX3yHG45e6YGjIm0XwDc3q3og==",
            "requires": {
                "@babel/types": "^7.0.0",
                "@jest/types": "^26.6.2",
                "@types/babel__traverse": "^7.0.4",
                "@types/prettier": "^2.0.0",
                "chalk": "^4.0.0",
                "expect": "^26.6.2",
                "graceful-fs": "^4.2.4",
                "jest-diff": "^26.6.2",
                "jest-get-type": "^26.3.0",
                "jest-haste-map": "^26.6.2",
                "jest-matcher-utils": "^26.6.2",
                "jest-message-util": "^26.6.2",
                "jest-resolve": "^26.6.2",
                "natural-compare": "^1.4.0",
                "pretty-format": "^26.6.2",
                "semver": "^7.3.2"
            },
            "dependencies": {
                "semver": {
                    "version": "7.3.5",
                    "resolved": "https://registry.npmjs.org/semver/-/semver-7.3.5.tgz",
                    "integrity": "sha512-PoeGJYh8HK4BTO/a9Tf6ZG3veo/A7ZVsYrSA6J8ny9nb3B1VrpkuN+z9OE5wfE5p6H4LchYZsegiQgbJD94ZFQ==",
                    "requires": {
                        "lru-cache": "^6.0.0"
                    }
                }
            }
        },
        "jest-util": {
            "version": "26.6.2",
            "resolved": "https://registry.npmjs.org/jest-util/-/jest-util-26.6.2.tgz",
            "integrity": "sha512-MDW0fKfsn0OI7MS7Euz6h8HNDXVQ0gaM9uW6RjfDmd1DAFcaxX9OqIakHIqhbnmF08Cf2DLDG+ulq8YQQ0Lp0Q==",
            "requires": {
                "@jest/types": "^26.6.2",
                "@types/node": "*",
                "chalk": "^4.0.0",
                "graceful-fs": "^4.2.4",
                "is-ci": "^2.0.0",
                "micromatch": "^4.0.2"
            }
        },
        "jest-validate": {
            "version": "26.6.2",
            "resolved": "https://registry.npmjs.org/jest-validate/-/jest-validate-26.6.2.tgz",
            "integrity": "sha512-NEYZ9Aeyj0i5rQqbq+tpIOom0YS1u2MVu6+euBsvpgIme+FOfRmoC4R5p0JiAUpaFvFy24xgrpMknarR/93XjQ==",
            "requires": {
                "@jest/types": "^26.6.2",
                "camelcase": "^6.0.0",
                "chalk": "^4.0.0",
                "jest-get-type": "^26.3.0",
                "leven": "^3.1.0",
                "pretty-format": "^26.6.2"
            },
            "dependencies": {
                "camelcase": {
                    "version": "6.2.0",
                    "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-6.2.0.tgz",
                    "integrity": "sha512-c7wVvbw3f37nuobQNtgsgG9POC9qMbNuMQmTCqZv23b6MIz0fcYpBiOlv9gEN/hdLdnZTDQhg6e9Dq5M1vKvfg=="
                }
            }
        },
        "jest-watcher": {
            "version": "26.6.2",
            "resolved": "https://registry.npmjs.org/jest-watcher/-/jest-watcher-26.6.2.tgz",
            "integrity": "sha512-WKJob0P/Em2csiVthsI68p6aGKTIcsfjH9Gsx1f0A3Italz43e3ho0geSAVsmj09RWOELP1AZ/DXyJgOgDKxXQ==",
            "requires": {
                "@jest/test-result": "^26.6.2",
                "@jest/types": "^26.6.2",
                "@types/node": "*",
                "ansi-escapes": "^4.2.1",
                "chalk": "^4.0.0",
                "jest-util": "^26.6.2",
                "string-length": "^4.0.1"
            }
        },
        "jest-worker": {
            "version": "26.6.2",
            "resolved": "https://registry.npmjs.org/jest-worker/-/jest-worker-26.6.2.tgz",
            "integrity": "sha512-KWYVV1c4i+jbMpaBC+U++4Va0cp8OisU185o73T1vo99hqi7w8tSJfUXYswwqqrjzwxa6KpRK54WhPvwf5w6PQ==",
            "requires": {
                "@types/node": "*",
                "merge-stream": "^2.0.0",
                "supports-color": "^7.0.0"
            }
        },
        "js-tokens": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz",
            "integrity": "sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ=="
        },
        "js-yaml": {
            "version": "3.14.1",
            "resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-3.14.1.tgz",
            "integrity": "sha512-okMH7OXXJ7YrN9Ok3/SXrnu4iX9yOk+25nqX4imS2npuvTYDmo/QEZoqwZkYaIDk3jVvBOTOIEgEhaLOynBS9g==",
            "requires": {
                "argparse": "^1.0.7",
                "esprima": "^4.0.0"
            }
        },
        "jsbn": {
            "version": "0.1.1",
            "resolved": "https://registry.npmjs.org/jsbn/-/jsbn-0.1.1.tgz",
            "integrity": "sha1-peZUwuWi3rXyAdls77yoDA7y9RM="
        },
        "jsdom": {
            "version": "16.5.3",
            "resolved": "https://registry.npmjs.org/jsdom/-/jsdom-16.5.3.tgz",
            "integrity": "sha512-Qj1H+PEvUsOtdPJ056ewXM4UJPCi4hhLA8wpiz9F2YvsRBhuFsXxtrIFAgGBDynQA9isAMGE91PfUYbdMPXuTA==",
            "requires": {
                "abab": "^2.0.5",
                "acorn": "^8.1.0",
                "acorn-globals": "^6.0.0",
                "cssom": "^0.4.4",
                "cssstyle": "^2.3.0",
                "data-urls": "^2.0.0",
                "decimal.js": "^10.2.1",
                "domexception": "^2.0.1",
                "escodegen": "^2.0.0",
                "html-encoding-sniffer": "^2.0.1",
                "is-potential-custom-element-name": "^1.0.0",
                "nwsapi": "^2.2.0",
                "parse5": "6.0.1",
                "request": "^2.88.2",
                "request-promise-native": "^1.0.9",
                "saxes": "^5.0.1",
                "symbol-tree": "^3.2.4",
                "tough-cookie": "^4.0.0",
                "w3c-hr-time": "^1.0.2",
                "w3c-xmlserializer": "^2.0.0",
                "webidl-conversions": "^6.1.0",
                "whatwg-encoding": "^1.0.5",
                "whatwg-mimetype": "^2.3.0",
                "whatwg-url": "^8.5.0",
                "ws": "^7.4.4",
                "xml-name-validator": "^3.0.0"
            }
        },
        "jsesc": {
            "version": "2.5.2",
            "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-2.5.2.tgz",
            "integrity": "sha512-OYu7XEzjkCQ3C5Ps3QIZsQfNpqoJyZZA99wd9aWd05NCtC5pWOkShK2mkL6HXQR6/Cy2lbNdPlZBpuQHXE63gA=="
        },
        "json-parse-even-better-errors": {
            "version": "2.3.1",
            "resolved": "https://registry.npmjs.org/json-parse-even-better-errors/-/json-parse-even-better-errors-2.3.1.tgz",
            "integrity": "sha512-xyFwyhro/JEof6Ghe2iz2NcXoj2sloNsWr/XsERDK/oiPCfaNhl5ONfp+jQdAZRQQ0IJWNzH9zIZF7li91kh2w=="
        },
        "json-schema": {
            "version": "0.2.3",
            "resolved": "https://registry.npmjs.org/json-schema/-/json-schema-0.2.3.tgz",
            "integrity": "sha1-tIDIkuWaLwWVTOcnvT8qTogvnhM="
        },
        "json-schema-traverse": {
            "version": "0.4.1",
            "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
            "integrity": "sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg=="
        },
        "json-stringify-safe": {
            "version": "5.0.1",
            "resolved": "https://registry.npmjs.org/json-stringify-safe/-/json-stringify-safe-5.0.1.tgz",
            "integrity": "sha1-Epai1Y/UXxmg9s4B1lcB4sc1tus="
        },
        "json5": {
            "version": "2.2.0",
            "resolved": "https://registry.npmjs.org/json5/-/json5-2.2.0.tgz",
            "integrity": "sha512-f+8cldu7X/y7RAJurMEJmdoKXGB/X550w2Nr3tTbezL6RwEE/iMcm+tZnXeoZtKuOq6ft8+CqzEkrIgx1fPoQA==",
            "requires": {
                "minimist": "^1.2.5"
            }
        },
        "jsprim": {
            "version": "1.4.1",
            "resolved": "https://registry.npmjs.org/jsprim/-/jsprim-1.4.1.tgz",
            "integrity": "sha1-MT5mvB5cwG5Di8G3SZwuXFastqI=",
            "requires": {
                "assert-plus": "1.0.0",
                "extsprintf": "1.3.0",
                "json-schema": "0.2.3",
                "verror": "1.10.0"
            }
        },
        "kind-of": {
            "version": "6.0.3",
            "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.3.tgz",
            "integrity": "sha512-dcS1ul+9tmeD95T+x28/ehLgd9mENa3LsvDTtzm3vyBEO7RPptvAD+t44WVXaUjTBRcrpFeFlC8WCruUR456hw=="
        },
        "kleur": {
            "version": "3.0.3",
            "resolved": "https://registry.npmjs.org/kleur/-/kleur-3.0.3.tgz",
            "integrity": "sha512-eTIzlVOSUR+JxdDFepEYcBMtZ9Qqdef+rnzWdRZuMbOywu5tO2w2N7rqjoANZ5k9vywhL6Br1VRjUIgTQx4E8w=="
        },
        "leven": {
            "version": "3.1.0",
            "resolved": "https://registry.npmjs.org/leven/-/leven-3.1.0.tgz",
            "integrity": "sha512-qsda+H8jTaUaN/x5vzW2rzc+8Rw4TAQ/4KjB46IwK5VH+IlVeeeje/EoZRpiXvIqjFgK84QffqPztGI3VBLG1A=="
        },
        "levn": {
            "version": "0.3.0",
            "resolved": "https://registry.npmjs.org/levn/-/levn-0.3.0.tgz",
            "integrity": "sha1-OwmSTt+fCDwEkP3UwLxEIeBHZO4=",
            "requires": {
                "prelude-ls": "~1.1.2",
                "type-check": "~0.3.2"
            }
        },
        "lines-and-columns": {
            "version": "1.1.6",
            "resolved": "https://registry.npmjs.org/lines-and-columns/-/lines-and-columns-1.1.6.tgz",
            "integrity": "sha1-HADHQ7QzzQpOgHWPe2SldEDZ/wA="
        },
        "locate-path": {
            "version": "5.0.0",
            "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-5.0.0.tgz",
            "integrity": "sha512-t7hw9pI+WvuwNJXwk5zVHpyhIqzg2qTlklJOf0mVxGSbe3Fp2VieZcduNYjaLDoy6p9uGpQEGWG87WpMKlNq8g==",
            "requires": {
                "p-locate": "^4.1.0"
            }
        },
        "lodash": {
            "version": "4.17.21",
            "resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.21.tgz",
            "integrity": "sha512-v2kDEe57lecTulaDIuNTPy3Ry4gLGJ6Z1O3vE1krgXZNrsQ+LFTGHVxVjcXPs17LhbZVGedAJv8XZ1tvj5FvSg=="
        },
        "lru-cache": {
            "version": "6.0.0",
            "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-6.0.0.tgz",
            "integrity": "sha512-Jo6dJ04CmSjuznwJSS3pUeWmd/H0ffTlkXXgwZi+eq1UCmqQwCh+eLsYOYCwY991i2Fah4h1BEMCx4qThGbsiA==",
            "requires": {
                "yallist": "^4.0.0"
            }
        },
        "make-dir": {
            "version": "3.1.0",
            "resolved": "https://registry.npmjs.org/make-dir/-/make-dir-3.1.0.tgz",
            "integrity": "sha512-g3FeP20LNwhALb/6Cz6Dd4F2ngze0jz7tbzrD2wAV+o9FeNHe4rL+yK2md0J/fiSf1sa1ADhXqi5+oVwOM/eGw==",
            "requires": {
                "semver": "^6.0.0"
            }
        },
        "makeerror": {
            "version": "1.0.11",
            "resolved": "https://registry.npmjs.org/makeerror/-/makeerror-1.0.11.tgz",
            "integrity": "sha1-4BpckQnyr3lmDk6LlYd5AYT1qWw=",
            "requires": {
                "tmpl": "1.0.x"
            }
        },
        "map-cache": {
            "version": "0.2.2",
            "resolved": "https://registry.npmjs.org/map-cache/-/map-cache-0.2.2.tgz",
            "integrity": "sha1-wyq9C9ZSXZsFFkW7TyasXcmKDb8="
        },
        "map-visit": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/map-visit/-/map-visit-1.0.0.tgz",
            "integrity": "sha1-7Nyo8TFE5mDxtb1B8S80edmN+48=",
            "requires": {
                "object-visit": "^1.0.0"
            }
        },
        "media-typer": {
            "version": "0.3.0",
            "resolved": "https://registry.npmjs.org/media-typer/-/media-typer-0.3.0.tgz",
            "integrity": "sha1-hxDXrwqmJvj/+hzgAWhUUmMlV0g="
        },
        "merge-descriptors": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/merge-descriptors/-/merge-descriptors-1.0.1.tgz",
            "integrity": "sha1-sAqqVW3YtEVoFQ7J0blT8/kMu2E="
        },
        "merge-stream": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/merge-stream/-/merge-stream-2.0.0.tgz",
            "integrity": "sha512-abv/qOcuPfk3URPfDzmZU1LKmuw8kT+0nIHvKrKgFrwifol/doWcdA4ZqsWQ8ENrFKkd67Mfpo/LovbIUsbt3w=="
        },
        "methods": {
            "version": "1.1.2",
            "resolved": "https://registry.npmjs.org/methods/-/methods-1.1.2.tgz",
            "integrity": "sha1-VSmk1nZUE07cxSZmVoNbD4Ua/O4="
        },
        "micromatch": {
            "version": "4.0.4",
            "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-4.0.4.tgz",
            "integrity": "sha512-pRmzw/XUcwXGpD9aI9q/0XOwLNygjETJ8y0ao0wdqprrzDa4YnxLcz7fQRZr8voh8V10kGhABbNcHVk5wHgWwg==",
            "requires": {
                "braces": "^3.0.1",
                "picomatch": "^2.2.3"
            }
        },
        "mime": {
            "version": "1.6.0",
            "resolved": "https://registry.npmjs.org/mime/-/mime-1.6.0.tgz",
            "integrity": "sha512-x0Vn8spI+wuJ1O6S7gnbaQg8Pxh4NNHb7KSINmEWKiPE4RKOplvijn+NkmYmmRgP68mc70j2EbeTFRsrswaQeg=="
        },
        "mime-db": {
            "version": "1.47.0",
            "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.47.0.tgz",
            "integrity": "sha512-QBmA/G2y+IfeS4oktet3qRZ+P5kPhCKRXxXnQEudYqUaEioAU1/Lq2us3D/t1Jfo4hE9REQPrbB7K5sOczJVIw=="
        },
        "mime-types": {
            "version": "2.1.30",
            "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.30.tgz",
            "integrity": "sha512-crmjA4bLtR8m9qLpHvgxSChT+XoSlZi8J4n/aIdn3z92e/U47Z0V/yl+Wh9W046GgFVAmoNR/fmdbZYcSSIUeg==",
            "requires": {
                "mime-db": "1.47.0"
            }
        },
        "mimic-fn": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/mimic-fn/-/mimic-fn-2.1.0.tgz",
            "integrity": "sha512-OqbOk5oEQeAZ8WXWydlu9HJjz9WVdEIvamMCcXmuqUYjTknH/sqsWvhQ3vgwKFRR1HpjvNBKQ37nbJgYzGqGcg=="
        },
        "minimatch": {
            "version": "3.0.4",
            "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.0.4.tgz",
            "integrity": "sha512-yJHVQEhyqPLUTgt9B83PXu6W3rx4MvvHvSUvToogpwoGDOUQ+yDrR0HRot+yOCdCO7u4hX3pWft6kWBBcqh0UA==",
            "requires": {
                "brace-expansion": "^1.1.7"
            }
        },
        "minimist": {
            "version": "1.2.5",
            "resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.5.tgz",
            "integrity": "sha512-FM9nNUYrRBAELZQT3xeZQ7fmMOBg6nWNmJKTcgsJeaLstP/UODVpGsr5OhXhhXg6f+qtJ8uiZ+PUxkDWcgIXLw=="
        },
        "mixin-deep": {
            "version": "1.3.2",
            "resolved": "https://registry.npmjs.org/mixin-deep/-/mixin-deep-1.3.2.tgz",
            "integrity": "sha512-WRoDn//mXBiJ1H40rqa3vH0toePwSsGb45iInWlTySa+Uu4k3tYUSxa2v1KqAiLtvlrSzaExqS1gtk96A9zvEA==",
            "requires": {
                "for-in": "^1.0.2",
                "is-extendable": "^1.0.1"
            },
            "dependencies": {
                "is-extendable": {
                    "version": "1.0.1",
                    "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-1.0.1.tgz",
                    "integrity": "sha512-arnXMxT1hhoKo9k1LZdmlNyJdDDfy2v0fXjFlmok4+i8ul/6WlbVge9bhM74OpNPQPMGUToDtz+KXa1PneJxOA==",
                    "requires": {
                        "is-plain-object": "^2.0.4"
                    }
                }
            }
        },
        "ms": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
            "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g="
        },
        "nanomatch": {
            "version": "1.2.13",
            "resolved": "https://registry.npmjs.org/nanomatch/-/nanomatch-1.2.13.tgz",
            "integrity": "sha512-fpoe2T0RbHwBTBUOftAfBPaDEi06ufaUai0mE6Yn1kacc3SnTErfb/h+X94VXzI64rKFHYImXSvdwGGCmwOqCA==",
            "requires": {
                "arr-diff": "^4.0.0",
                "array-unique": "^0.3.2",
                "define-property": "^2.0.2",
                "extend-shallow": "^3.0.2",
                "fragment-cache": "^0.2.1",
                "is-windows": "^1.0.2",
                "kind-of": "^6.0.2",
                "object.pick": "^1.3.0",
                "regex-not": "^1.0.0",
                "snapdragon": "^0.8.1",
                "to-regex": "^3.0.1"
            }
        },
        "natural-compare": {
            "version": "1.4.0",
            "resolved": "https://registry.npmjs.org/natural-compare/-/natural-compare-1.4.0.tgz",
            "integrity": "sha1-Sr6/7tdUHywnrPspvbvRXI1bpPc="
        },
        "negotiator": {
            "version": "0.6.2",
            "resolved": "https://registry.npmjs.org/negotiator/-/negotiator-0.6.2.tgz",
            "integrity": "sha512-hZXc7K2e+PgeI1eDBe/10Ard4ekbfrrqG8Ep+8Jmf4JID2bNg7NvCPOZN+kfF574pFQI7mum2AUqDidoKqcTOw=="
        },
        "nice-try": {
            "version": "1.0.5",
            "resolved": "https://registry.npmjs.org/nice-try/-/nice-try-1.0.5.tgz",
            "integrity": "sha512-1nh45deeb5olNY7eX82BkPO7SSxR5SSYJiPTrTdFUVYwAl8CKMA5N9PjTYkHiRjisVcxcQ1HXdLhx2qxxJzLNQ=="
        },
        "node-int64": {
            "version": "0.4.0",
            "resolved": "https://registry.npmjs.org/node-int64/-/node-int64-0.4.0.tgz",
            "integrity": "sha1-h6kGXNs1XTGC2PlM4RGIuCXGijs="
        },
        "node-modules-regexp": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/node-modules-regexp/-/node-modules-regexp-1.0.0.tgz",
            "integrity": "sha1-jZ2+KJZKSsVxLpExZCEHxx6Q7EA="
        },
        "node-notifier": {
            "version": "8.0.2",
            "resolved": "https://registry.npmjs.org/node-notifier/-/node-notifier-8.0.2.tgz",
            "integrity": "sha512-oJP/9NAdd9+x2Q+rfphB2RJCHjod70RcRLjosiPMMu5gjIfwVnOUGq2nbTjTUbmy0DJ/tFIVT30+Qe3nzl4TJg==",
            "optional": true,
            "requires": {
                "growly": "^1.3.0",
                "is-wsl": "^2.2.0",
                "semver": "^7.3.2",
                "shellwords": "^0.1.1",
                "uuid": "^8.3.0",
                "which": "^2.0.2"
            },
            "dependencies": {
                "semver": {
                    "version": "7.3.5",
                    "resolved": "https://registry.npmjs.org/semver/-/semver-7.3.5.tgz",
                    "integrity": "sha512-PoeGJYh8HK4BTO/a9Tf6ZG3veo/A7ZVsYrSA6J8ny9nb3B1VrpkuN+z9OE5wfE5p6H4LchYZsegiQgbJD94ZFQ==",
                    "optional": true,
                    "requires": {
                        "lru-cache": "^6.0.0"
                    }
                },
                "which": {
                    "version": "2.0.2",
                    "resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
                    "integrity": "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==",
                    "optional": true,
                    "requires": {
                        "isexe": "^2.0.0"
                    }
                }
            }
        },
        "node-releases": {
            "version": "1.1.71",
            "resolved": "https://registry.npmjs.org/node-releases/-/node-releases-1.1.71.tgz",
            "integrity": "sha512-zR6HoT6LrLCRBwukmrVbHv0EpEQjksO6GmFcZQQuCAy139BEsoVKPYnf3jongYW83fAa1torLGYwxxky/p28sg=="
        },
        "normalize-package-data": {
            "version": "2.5.0",
            "resolved": "https://registry.npmjs.org/normalize-package-data/-/normalize-package-data-2.5.0.tgz",
            "integrity": "sha512-/5CMN3T0R4XTj4DcGaexo+roZSdSFW/0AOOTROrjxzCG1wrWXEsGbRKevjlIL+ZDE4sZlJr5ED4YW0yqmkK+eA==",
            "requires": {
                "hosted-git-info": "^2.1.4",
                "resolve": "^1.10.0",
                "semver": "2 || 3 || 4 || 5",
                "validate-npm-package-license": "^3.0.1"
            },
            "dependencies": {
                "semver": {
                    "version": "5.7.1",
                    "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
                    "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ=="
                }
            }
        },
        "normalize-path": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz",
            "integrity": "sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA=="
        },
        "npm-run-path": {
            "version": "2.0.2",
            "resolved": "https://registry.npmjs.org/npm-run-path/-/npm-run-path-2.0.2.tgz",
            "integrity": "sha1-NakjLfo11wZ7TLLd8jV7GHFTbF8=",
            "requires": {
                "path-key": "^2.0.0"
            }
        },
        "nwsapi": {
            "version": "2.2.0",
            "resolved": "https://registry.npmjs.org/nwsapi/-/nwsapi-2.2.0.tgz",
            "integrity": "sha512-h2AatdwYH+JHiZpv7pt/gSX1XoRGb7L/qSIeuqA6GwYoF9w1vP1cw42TO0aI2pNyshRK5893hNSl+1//vHK7hQ=="
        },
        "oauth-sign": {
            "version": "0.9.0",
            "resolved": "https://registry.npmjs.org/oauth-sign/-/oauth-sign-0.9.0.tgz",
            "integrity": "sha512-fexhUFFPTGV8ybAtSIGbV6gOkSv8UtRbDBnAyLQw4QPKkgNlsH2ByPGtMUqdWkos6YCRmAqViwgZrJc/mRDzZQ=="
        },
        "object-copy": {
            "version": "0.1.0",
            "resolved": "https://registry.npmjs.org/object-copy/-/object-copy-0.1.0.tgz",
            "integrity": "sha1-fn2Fi3gb18mRpBupde04EnVOmYw=",
            "requires": {
                "copy-descriptor": "^0.1.0",
                "define-property": "^0.2.5",
                "kind-of": "^3.0.3"
            },
            "dependencies": {
                "define-property": {
                    "version": "0.2.5",
                    "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
                    "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
                    "requires": {
                        "is-descriptor": "^0.1.0"
                    }
                },
                "kind-of": {
                    "version": "3.2.2",
                    "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
                    "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
                    "requires": {
                        "is-buffer": "^1.1.5"
                    }
                }
            }
        },
        "object-inspect": {
            "version": "1.10.2",
            "resolved": "https://registry.npmjs.org/object-inspect/-/object-inspect-1.10.2.tgz",
            "integrity": "sha512-gz58rdPpadwztRrPjZE9DZLOABUpTGdcANUgOwBFO1C+HZZhePoP83M65WGDmbpwFYJSWqavbl4SgDn4k8RYTA=="
        },
        "object-visit": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/object-visit/-/object-visit-1.0.1.tgz",
            "integrity": "sha1-95xEk68MU3e1n+OdOV5BBC3QRbs=",
            "requires": {
                "isobject": "^3.0.0"
            }
        },
        "object.pick": {
            "version": "1.3.0",
            "resolved": "https://registry.npmjs.org/object.pick/-/object.pick-1.3.0.tgz",
            "integrity": "sha1-h6EKxMFpS9Lhy/U1kaZhQftd10c=",
            "requires": {
                "isobject": "^3.0.1"
            }
        },
        "on-finished": {
            "version": "2.3.0",
            "resolved": "https://registry.npmjs.org/on-finished/-/on-finished-2.3.0.tgz",
            "integrity": "sha1-IPEzZIGwg811M3mSoWlxqi2QaUc=",
            "requires": {
                "ee-first": "1.1.1"
            }
        },
        "once": {
            "version": "1.4.0",
            "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
            "integrity": "sha1-WDsap3WWHUsROsF9nFC6753Xa9E=",
            "requires": {
                "wrappy": "1"
            }
        },
        "onetime": {
            "version": "5.1.2",
            "resolved": "https://registry.npmjs.org/onetime/-/onetime-5.1.2.tgz",
            "integrity": "sha512-kbpaSSGJTWdAY5KPVeMOKXSrPtr8C8C7wodJbcsd51jRnmD+GZu8Y0VoU6Dm5Z4vWr0Ig/1NKuWRKf7j5aaYSg==",
            "requires": {
                "mimic-fn": "^2.1.0"
            }
        },
        "optionator": {
            "version": "0.8.3",
            "resolved": "https://registry.npmjs.org/optionator/-/optionator-0.8.3.tgz",
            "integrity": "sha512-+IW9pACdk3XWmmTXG8m3upGUJst5XRGzxMRjXzAuJ1XnIFNvfhjjIuYkDvysnPQ7qzqVzLt78BCruntqRhWQbA==",
            "requires": {
                "deep-is": "~0.1.3",
                "fast-levenshtein": "~2.0.6",
                "levn": "~0.3.0",
                "prelude-ls": "~1.1.2",
                "type-check": "~0.3.2",
                "word-wrap": "~1.2.3"
            }
        },
        "p-each-series": {
            "version": "2.2.0",
            "resolved": "https://registry.npmjs.org/p-each-series/-/p-each-series-2.2.0.tgz",
            "integrity": "sha512-ycIL2+1V32th+8scbpTvyHNaHe02z0sjgh91XXjAk+ZeXoPN4Z46DVUnzdso0aX4KckKw0FNNFHdjZ2UsZvxiA=="
        },
        "p-finally": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/p-finally/-/p-finally-1.0.0.tgz",
            "integrity": "sha1-P7z7FbiZpEEjs0ttzBi3JDNqLK4="
        },
        "p-limit": {
            "version": "2.3.0",
            "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-2.3.0.tgz",
            "integrity": "sha512-//88mFWSJx8lxCzwdAABTJL2MyWB12+eIY7MDL2SqLmAkeKU9qxRvWuSyTjm3FUmpBEMuFfckAIqEaVGUDxb6w==",
            "requires": {
                "p-try": "^2.0.0"
            }
        },
        "p-locate": {
            "version": "4.1.0",
            "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-4.1.0.tgz",
            "integrity": "sha512-R79ZZ/0wAxKGu3oYMlz8jy/kbhsNrS7SKZ7PxEHBgJ5+F2mtFW2fK2cOtBh1cHYkQsbzFV7I+EoRKe6Yt0oK7A==",
            "requires": {
                "p-limit": "^2.2.0"
            }
        },
        "p-try": {
            "version": "2.2.0",
            "resolved": "https://registry.npmjs.org/p-try/-/p-try-2.2.0.tgz",
            "integrity": "sha512-R4nPAVTAU0B9D35/Gk3uJf/7XYbQcyohSKdvAxIRSNghFl4e71hVoGnBNQz9cWaXxO2I10KTC+3jMdvvoKw6dQ=="
        },
        "parse-json": {
            "version": "5.2.0",
            "resolved": "https://registry.npmjs.org/parse-json/-/parse-json-5.2.0.tgz",
            "integrity": "sha512-ayCKvm/phCGxOkYRSCM82iDwct8/EonSEgCSxWxD7ve6jHggsFl4fZVQBPRNgQoKiuV/odhFrGzQXZwbifC8Rg==",
            "requires": {
                "@babel/code-frame": "^7.0.0",
                "error-ex": "^1.3.1",
                "json-parse-even-better-errors": "^2.3.0",
                "lines-and-columns": "^1.1.6"
            }
        },
        "parse5": {
            "version": "6.0.1",
            "resolved": "https://registry.npmjs.org/parse5/-/parse5-6.0.1.tgz",
            "integrity": "sha512-Ofn/CTFzRGTTxwpNEs9PP93gXShHcTq255nzRYSKe8AkVpZY7e1fpmTfOyoIvjP5HG7Z2ZM7VS9PPhQGW2pOpw=="
        },
        "parseurl": {
            "version": "1.3.3",
            "resolved": "https://registry.npmjs.org/parseurl/-/parseurl-1.3.3.tgz",
            "integrity": "sha512-CiyeOxFT/JZyN5m0z9PfXw4SCBJ6Sygz1Dpl0wqjlhDEGGBP1GnsUVEL0p63hoG1fcj3fHynXi9NYO4nWOL+qQ=="
        },
        "pascalcase": {
            "version": "0.1.1",
            "resolved": "https://registry.npmjs.org/pascalcase/-/pascalcase-0.1.1.tgz",
            "integrity": "sha1-s2PlXoAGym/iF4TS2yK9FdeRfxQ="
        },
        "path-exists": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
            "integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w=="
        },
        "path-is-absolute": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
            "integrity": "sha1-F0uSaHNVNP+8es5r9TpanhtcX18="
        },
        "path-key": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/path-key/-/path-key-2.0.1.tgz",
            "integrity": "sha1-QRyttXTFoUDTpLGRDUDYDMn0C0A="
        },
        "path-parse": {
            "version": "1.0.6",
            "resolved": "https://registry.npmjs.org/path-parse/-/path-parse-1.0.6.tgz",
            "integrity": "sha512-GSmOT2EbHrINBf9SR7CDELwlJ8AENk3Qn7OikK4nFYAu3Ote2+JYNVvkpAEQm3/TLNEJFD/xZJjzyxg3KBWOzw=="
        },
        "path-to-regexp": {
            "version": "0.1.7",
            "resolved": "https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-0.1.7.tgz",
            "integrity": "sha1-32BBeABfUi8V60SQ5yR6G/qmf4w="
        },
        "performance-now": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/performance-now/-/performance-now-2.1.0.tgz",
            "integrity": "sha1-Ywn04OX6kT7BxpMHrjZLSzd8nns="
        },
        "picomatch": {
            "version": "2.2.3",
            "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.2.3.tgz",
            "integrity": "sha512-KpELjfwcCDUb9PeigTs2mBJzXUPzAuP2oPcA989He8Rte0+YUAjw1JVedDhuTKPkHjSYzMN3npC9luThGYEKdg=="
        },
        "pirates": {
            "version": "4.0.1",
            "resolved": "https://registry.npmjs.org/pirates/-/pirates-4.0.1.tgz",
            "integrity": "sha512-WuNqLTbMI3tmfef2TKxlQmAiLHKtFhlsCZnPIpuv2Ow0RDVO8lfy1Opf4NUzlMXLjPl+Men7AuVdX6TA+s+uGA==",
            "requires": {
                "node-modules-regexp": "^1.0.0"
            }
        },
        "pkg-dir": {
            "version": "4.2.0",
            "resolved": "https://registry.npmjs.org/pkg-dir/-/pkg-dir-4.2.0.tgz",
            "integrity": "sha512-HRDzbaKjC+AOWVXxAU/x54COGeIv9eb+6CkDSQoNTt4XyWoIJvuPsXizxu/Fr23EiekbtZwmh1IcIG/l/a10GQ==",
            "requires": {
                "find-up": "^4.0.0"
            }
        },
        "posix-character-classes": {
            "version": "0.1.1",
            "resolved": "https://registry.npmjs.org/posix-character-classes/-/posix-character-classes-0.1.1.tgz",
            "integrity": "sha1-AerA/jta9xoqbAL+q7jB/vfgDqs="
        },
        "prelude-ls": {
            "version": "1.1.2",
            "resolved": "https://registry.npmjs.org/prelude-ls/-/prelude-ls-1.1.2.tgz",
            "integrity": "sha1-IZMqVJ9eUv/ZqCf1cOBL5iqX2lQ="
        },
        "pretty-format": {
            "version": "26.6.2",
            "resolved": "https://registry.npmjs.org/pretty-format/-/pretty-format-26.6.2.tgz",
            "integrity": "sha512-7AeGuCYNGmycyQbCqd/3PWH4eOoX/OiCa0uphp57NVTeAGdJGaAliecxwBDHYQCIvrW7aDBZCYeNTP/WX69mkg==",
            "requires": {
                "@jest/types": "^26.6.2",
                "ansi-regex": "^5.0.0",
                "ansi-styles": "^4.0.0",
                "react-is": "^17.0.1"
            }
        },
        "prompts": {
            "version": "2.4.1",
            "resolved": "https://registry.npmjs.org/prompts/-/prompts-2.4.1.tgz",
            "integrity": "sha512-EQyfIuO2hPDsX1L/blblV+H7I0knhgAd82cVneCwcdND9B8AuCDuRcBH6yIcG4dFzlOUqbazQqwGjx5xmsNLuQ==",
            "requires": {
                "kleur": "^3.0.3",
                "sisteransi": "^1.0.5"
            }
        },
        "proxy-addr": {
            "version": "2.0.6",
            "resolved": "https://registry.npmjs.org/proxy-addr/-/proxy-addr-2.0.6.tgz",
            "integrity": "sha512-dh/frvCBVmSsDYzw6n926jv974gddhkFPfiN8hPOi30Wax25QZyZEGveluCgliBnqmuM+UJmBErbAUFIoDbjOw==",
            "requires": {
                "forwarded": "~0.1.2",
                "ipaddr.js": "1.9.1"
            }
        },
        "psl": {
            "version": "1.8.0",
            "resolved": "https://registry.npmjs.org/psl/-/psl-1.8.0.tgz",
            "integrity": "sha512-RIdOzyoavK+hA18OGGWDqUTsCLhtA7IcZ/6NCs4fFJaHBDab+pDDmDIByWFRQJq2Cd7r1OoQxBGKOaztq+hjIQ=="
        },
        "pump": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/pump/-/pump-3.0.0.tgz",
            "integrity": "sha512-LwZy+p3SFs1Pytd/jYct4wpv49HiYCqd9Rlc5ZVdk0V+8Yzv6jR5Blk3TRmPL1ft69TxP0IMZGJ+WPFU2BFhww==",
            "requires": {
                "end-of-stream": "^1.1.0",
                "once": "^1.3.1"
            }
        },
        "punycode": {
            "version": "2.1.1",
            "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.1.1.tgz",
            "integrity": "sha512-XRsRjdf+j5ml+y/6GKHPZbrF/8p2Yga0JPtdqTIY2Xe5ohJPD9saDJJLPvp9+NSBprVvevdXZybnj2cv8OEd0A=="
        },
        "qs": {
            "version": "6.7.0",
            "resolved": "https://registry.npmjs.org/qs/-/qs-6.7.0.tgz",
            "integrity": "sha512-VCdBRNFTX1fyE7Nb6FYoURo/SPe62QCaAyzJvUjwRaIsc+NePBEniHlvxFmmX56+HZphIGtV0XeCirBtpDrTyQ=="
        },
        "range-parser": {
            "version": "1.2.1",
            "resolved": "https://registry.npmjs.org/range-parser/-/range-parser-1.2.1.tgz",
            "integrity": "sha512-Hrgsx+orqoygnmhFbKaHE6c296J+HTAQXoxEF6gNupROmmGJRoyzfG3ccAveqCBrwr/2yxQ5BVd/GTl5agOwSg=="
        },
        "raw-body": {
            "version": "2.4.0",
            "resolved": "https://registry.npmjs.org/raw-body/-/raw-body-2.4.0.tgz",
            "integrity": "sha512-4Oz8DUIwdvoa5qMJelxipzi/iJIi40O5cGV1wNYp5hvZP8ZN0T+jiNkL0QepXs+EsQ9XJ8ipEDoiH70ySUJP3Q==",
            "requires": {
                "bytes": "3.1.0",
                "http-errors": "1.7.2",
                "iconv-lite": "0.4.24",
                "unpipe": "1.0.0"
            }
        },
        "react-is": {
            "version": "17.0.2",
            "resolved": "https://registry.npmjs.org/react-is/-/react-is-17.0.2.tgz",
            "integrity": "sha512-w2GsyukL62IJnlaff/nRegPQR94C/XXamvMWmSHRJ4y7Ts/4ocGRmTHvOs8PSE6pB3dWOrD/nueuU5sduBsQ4w=="
        },
        "read-pkg": {
            "version": "5.2.0",
            "resolved": "https://registry.npmjs.org/read-pkg/-/read-pkg-5.2.0.tgz",
            "integrity": "sha512-Ug69mNOpfvKDAc2Q8DRpMjjzdtrnv9HcSMX+4VsZxD1aZ6ZzrIE7rlzXBtWTyhULSMKg076AW6WR5iZpD0JiOg==",
            "requires": {
                "@types/normalize-package-data": "^2.4.0",
                "normalize-package-data": "^2.5.0",
                "parse-json": "^5.0.0",
                "type-fest": "^0.6.0"
            },
            "dependencies": {
                "type-fest": {
                    "version": "0.6.0",
                    "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.6.0.tgz",
                    "integrity": "sha512-q+MB8nYR1KDLrgr4G5yemftpMC7/QLqVndBmEEdqzmNj5dcFOO4Oo8qlwZE3ULT3+Zim1F8Kq4cBnikNhlCMlg=="
                }
            }
        },
        "read-pkg-up": {
            "version": "7.0.1",
            "resolved": "https://registry.npmjs.org/read-pkg-up/-/read-pkg-up-7.0.1.tgz",
            "integrity": "sha512-zK0TB7Xd6JpCLmlLmufqykGE+/TlOePD6qKClNW7hHDKFh/J7/7gCWGR7joEQEW1bKq3a3yUZSObOoWLFQ4ohg==",
            "requires": {
                "find-up": "^4.1.0",
                "read-pkg": "^5.2.0",
                "type-fest": "^0.8.1"
            }
        },
        "readable-stream": {
            "version": "3.6.0",
            "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-3.6.0.tgz",
            "integrity": "sha512-BViHy7LKeTz4oNnkcLJ+lVSL6vpiFeX6/d3oSH8zCW7UxP2onchk+vTGB143xuFjHS3deTgkKoXXymXqymiIdA==",
            "requires": {
                "inherits": "^2.0.3",
                "string_decoder": "^1.1.1",
                "util-deprecate": "^1.0.1"
            }
        },
        "regex-not": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/regex-not/-/regex-not-1.0.2.tgz",
            "integrity": "sha512-J6SDjUgDxQj5NusnOtdFxDwN/+HWykR8GELwctJ7mdqhcyy1xEc4SRFHUXvxTp661YaVKAjfRLZ9cCqS6tn32A==",
            "requires": {
                "extend-shallow": "^3.0.2",
                "safe-regex": "^1.1.0"
            }
        },
        "remove-trailing-separator": {
            "version": "1.1.0",
            "resolved": "https://registry.npmjs.org/remove-trailing-separator/-/remove-trailing-separator-1.1.0.tgz",
            "integrity": "sha1-wkvOKig62tW8P1jg1IJJuSN52O8="
        },
        "repeat-element": {
            "version": "1.1.4",
            "resolved": "https://registry.npmjs.org/repeat-element/-/repeat-element-1.1.4.tgz",
            "integrity": "sha512-LFiNfRcSu7KK3evMyYOuCzv3L10TW7yC1G2/+StMjK8Y6Vqd2MG7r/Qjw4ghtuCOjFvlnms/iMmLqpvW/ES/WQ=="
        },
        "repeat-string": {
            "version": "1.6.1",
            "resolved": "https://registry.npmjs.org/repeat-string/-/repeat-string-1.6.1.tgz",
            "integrity": "sha1-jcrkcOHIirwtYA//Sndihtp15jc="
        },
        "request": {
            "version": "2.88.2",
            "resolved": "https://registry.npmjs.org/request/-/request-2.88.2.tgz",
            "integrity": "sha512-MsvtOrfG9ZcrOwAW+Qi+F6HbD0CWXEh9ou77uOb7FM2WPhwT7smM833PzanhJLsgXjN89Ir6V2PczXNnMpwKhw==",
            "requires": {
                "aws-sign2": "~0.7.0",
                "aws4": "^1.8.0",
                "caseless": "~0.12.0",
                "combined-stream": "~1.0.6",
                "extend": "~3.0.2",
                "forever-agent": "~0.6.1",
                "form-data": "~2.3.2",
                "har-validator": "~5.1.3",
                "http-signature": "~1.2.0",
                "is-typedarray": "~1.0.0",
                "isstream": "~0.1.2",
                "json-stringify-safe": "~5.0.1",
                "mime-types": "~2.1.19",
                "oauth-sign": "~0.9.0",
                "performance-now": "^2.1.0",
                "qs": "~6.5.2",
                "safe-buffer": "^5.1.2",
                "tough-cookie": "~2.5.0",
                "tunnel-agent": "^0.6.0",
                "uuid": "^3.3.2"
            },
            "dependencies": {
                "qs": {
                    "version": "6.5.2",
                    "resolved": "https://registry.npmjs.org/qs/-/qs-6.5.2.tgz",
                    "integrity": "sha512-N5ZAX4/LxJmF+7wN74pUD6qAh9/wnvdQcjq9TZjevvXzSUo7bfmw91saqMjzGS2xq91/odN2dW/WOl7qQHNDGA=="
                },
                "tough-cookie": {
                    "version": "2.5.0",
                    "resolved": "https://registry.npmjs.org/tough-cookie/-/tough-cookie-2.5.0.tgz",
                    "integrity": "sha512-nlLsUzgm1kfLXSXfRZMc1KLAugd4hqJHDTvc2hDIwS3mZAfMEuMbc03SujMF+GEcpaX/qboeycw6iO8JwVv2+g==",
                    "requires": {
                        "psl": "^1.1.28",
                        "punycode": "^2.1.1"
                    }
                },
                "uuid": {
                    "version": "3.4.0",
                    "resolved": "https://registry.npmjs.org/uuid/-/uuid-3.4.0.tgz",
                    "integrity": "sha512-HjSDRw6gZE5JMggctHBcjVak08+KEVhSIiDzFnT9S9aegmp85S/bReBVTb4QTFaRNptJ9kuYaNhnbNEOkbKb/A=="
                }
            }
        },
        "request-promise-core": {
            "version": "1.1.4",
            "resolved": "https://registry.npmjs.org/request-promise-core/-/request-promise-core-1.1.4.tgz",
            "integrity": "sha512-TTbAfBBRdWD7aNNOoVOBH4pN/KigV6LyapYNNlAPA8JwbovRti1E88m3sYAwsLi5ryhPKsE9APwnjFTgdUjTpw==",
            "requires": {
                "lodash": "^4.17.19"
            }
        },
        "request-promise-native": {
            "version": "1.0.9",
            "resolved": "https://registry.npmjs.org/request-promise-native/-/request-promise-native-1.0.9.tgz",
            "integrity": "sha512-wcW+sIUiWnKgNY0dqCpOZkUbF/I+YPi+f09JZIDa39Ec+q82CpSYniDp+ISgTTbKmnpJWASeJBPZmoxH84wt3g==",
            "requires": {
                "request-promise-core": "1.1.4",
                "stealthy-require": "^1.1.1",
                "tough-cookie": "^2.3.3"
            },
            "dependencies": {
                "tough-cookie": {
                    "version": "2.5.0",
                    "resolved": "https://registry.npmjs.org/tough-cookie/-/tough-cookie-2.5.0.tgz",
                    "integrity": "sha512-nlLsUzgm1kfLXSXfRZMc1KLAugd4hqJHDTvc2hDIwS3mZAfMEuMbc03SujMF+GEcpaX/qboeycw6iO8JwVv2+g==",
                    "requires": {
                        "psl": "^1.1.28",
                        "punycode": "^2.1.1"
                    }
                }
            }
        },
        "require-directory": {
            "version": "2.1.1",
            "resolved": "https://registry.npmjs.org/require-directory/-/require-directory-2.1.1.tgz",
            "integrity": "sha1-jGStX9MNqxyXbiNE/+f3kqam30I="
        },
        "require-main-filename": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/require-main-filename/-/require-main-filename-2.0.0.tgz",
            "integrity": "sha512-NKN5kMDylKuldxYLSUfrbo5Tuzh4hd+2E8NPPX02mZtn1VuREQToYe/ZdlJy+J3uCpfaiGF05e7B8W0iXbQHmg=="
        },
        "resolve": {
            "version": "1.20.0",
            "resolved": "https://registry.npmjs.org/resolve/-/resolve-1.20.0.tgz",
            "integrity": "sha512-wENBPt4ySzg4ybFQW2TT1zMQucPK95HSh/nq2CFTZVOGut2+pQvSsgtda4d26YrYcr067wjbmzOG8byDPBX63A==",
            "requires": {
                "is-core-module": "^2.2.0",
                "path-parse": "^1.0.6"
            }
        },
        "resolve-cwd": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/resolve-cwd/-/resolve-cwd-3.0.0.tgz",
            "integrity": "sha512-OrZaX2Mb+rJCpH/6CpSqt9xFVpN++x01XnN2ie9g6P5/3xelLAkXWVADpdz1IHD/KFfEXyE6V0U01OQ3UO2rEg==",
            "requires": {
                "resolve-from": "^5.0.0"
            }
        },
        "resolve-from": {
            "version": "5.0.0",
            "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-5.0.0.tgz",
            "integrity": "sha512-qYg9KP24dD5qka9J47d0aVky0N+b4fTU89LN9iDnjB5waksiC49rvMB0PrUJQGoTmH50XPiqOvAjDfaijGxYZw=="
        },
        "resolve-url": {
            "version": "0.2.1",
            "resolved": "https://registry.npmjs.org/resolve-url/-/resolve-url-0.2.1.tgz",
            "integrity": "sha1-LGN/53yJOv0qZj/iGqkIAGjiBSo="
        },
        "ret": {
            "version": "0.1.15",
            "resolved": "https://registry.npmjs.org/ret/-/ret-0.1.15.tgz",
            "integrity": "sha512-TTlYpa+OL+vMMNG24xSlQGEJ3B/RzEfUlLct7b5G/ytav+wPrplCpVMFuwzXbkecJrb6IYo1iFb0S9v37754mg=="
        },
        "rimraf": {
            "version": "3.0.2",
            "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-3.0.2.tgz",
            "integrity": "sha512-JZkJMZkAGFFPP2YqXZXPbMlMBgsxzE8ILs4lMIX/2o0L9UBw9O/Y3o6wFw/i9YLapcUJWwqbi3kdxIPdC62TIA==",
            "requires": {
                "glob": "^7.1.3"
            }
        },
        "rsvp": {
            "version": "4.8.5",
            "resolved": "https://registry.npmjs.org/rsvp/-/rsvp-4.8.5.tgz",
            "integrity": "sha512-nfMOlASu9OnRJo1mbEk2cz0D56a1MBNrJ7orjRZQG10XDyuvwksKbuXNp6qa+kbn839HwjwhBzhFmdsaEAfauA=="
        },
        "safe-buffer": {
            "version": "5.1.2",
            "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz",
            "integrity": "sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g=="
        },
        "safe-regex": {
            "version": "1.1.0",
            "resolved": "https://registry.npmjs.org/safe-regex/-/safe-regex-1.1.0.tgz",
            "integrity": "sha1-QKNmnzsHfR6UPURinhV91IAjvy4=",
            "requires": {
                "ret": "~0.1.10"
            }
        },
        "safer-buffer": {
            "version": "2.1.2",
            "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
            "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg=="
        },
        "sane": {
            "version": "4.1.0",
            "resolved": "https://registry.npmjs.org/sane/-/sane-4.1.0.tgz",
            "integrity": "sha512-hhbzAgTIX8O7SHfp2c8/kREfEn4qO/9q8C9beyY6+tvZ87EpoZ3i1RIEvp27YBswnNbY9mWd6paKVmKbAgLfZA==",
            "requires": {
                "@cnakazawa/watch": "^1.0.3",
                "anymatch": "^2.0.0",
                "capture-exit": "^2.0.0",
                "exec-sh": "^0.3.2",
                "execa": "^1.0.0",
                "fb-watchman": "^2.0.0",
                "micromatch": "^3.1.4",
                "minimist": "^1.1.1",
                "walker": "~1.0.5"
            },
            "dependencies": {
                "anymatch": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-2.0.0.tgz",
                    "integrity": "sha512-5teOsQWABXHHBFP9y3skS5P3d/WfWXpv3FUpy+LorMrNYaT9pI4oLMQX7jzQ2KklNpGpWHzdCXTDT2Y3XGlZBw==",
                    "requires": {
                        "micromatch": "^3.1.4",
                        "normalize-path": "^2.1.1"
                    }
                },
                "braces": {
                    "version": "2.3.2",
                    "resolved": "https://registry.npmjs.org/braces/-/braces-2.3.2.tgz",
                    "integrity": "sha512-aNdbnj9P8PjdXU4ybaWLK2IF3jc/EoDYbC7AazW6to3TRsfXxscC9UXOB5iDiEQrkyIbWp2SLQda4+QAa7nc3w==",
                    "requires": {
                        "arr-flatten": "^1.1.0",
                        "array-unique": "^0.3.2",
                        "extend-shallow": "^2.0.1",
                        "fill-range": "^4.0.0",
                        "isobject": "^3.0.1",
                        "repeat-element": "^1.1.2",
                        "snapdragon": "^0.8.1",
                        "snapdragon-node": "^2.0.1",
                        "split-string": "^3.0.2",
                        "to-regex": "^3.0.1"
                    },
                    "dependencies": {
                        "extend-shallow": {
                            "version": "2.0.1",
                            "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
                            "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
                            "requires": {
                                "is-extendable": "^0.1.0"
                            }
                        }
                    }
                },
                "fill-range": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-4.0.0.tgz",
                    "integrity": "sha1-1USBHUKPmOsGpj3EAtJAPDKMOPc=",
                    "requires": {
                        "extend-shallow": "^2.0.1",
                        "is-number": "^3.0.0",
                        "repeat-string": "^1.6.1",
                        "to-regex-range": "^2.1.0"
                    },
                    "dependencies": {
                        "extend-shallow": {
                            "version": "2.0.1",
                            "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
                            "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
                            "requires": {
                                "is-extendable": "^0.1.0"
                            }
                        }
                    }
                },
                "is-number": {
                    "version": "3.0.0",
                    "resolved": "https://registry.npmjs.org/is-number/-/is-number-3.0.0.tgz",
                    "integrity": "sha1-JP1iAaR4LPUFYcgQJ2r8fRLXEZU=",
                    "requires": {
                        "kind-of": "^3.0.2"
                    },
                    "dependencies": {
                        "kind-of": {
                            "version": "3.2.2",
                            "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
                            "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
                            "requires": {
                                "is-buffer": "^1.1.5"
                            }
                        }
                    }
                },
                "micromatch": {
                    "version": "3.1.10",
                    "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-3.1.10.tgz",
                    "integrity": "sha512-MWikgl9n9M3w+bpsY3He8L+w9eF9338xRl8IAO5viDizwSzziFEyUzo2xrrloB64ADbTf8uA8vRqqttDTOmccg==",
                    "requires": {
                        "arr-diff": "^4.0.0",
                        "array-unique": "^0.3.2",
                        "braces": "^2.3.1",
                        "define-property": "^2.0.2",
                        "extend-shallow": "^3.0.2",
                        "extglob": "^2.0.4",
                        "fragment-cache": "^0.2.1",
                        "kind-of": "^6.0.2",
                        "nanomatch": "^1.2.9",
                        "object.pick": "^1.3.0",
                        "regex-not": "^1.0.0",
                        "snapdragon": "^0.8.1",
                        "to-regex": "^3.0.2"
                    }
                },
                "normalize-path": {
                    "version": "2.1.1",
                    "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-2.1.1.tgz",
                    "integrity": "sha1-GrKLVW4Zg2Oowab35vogE3/mrtk=",
                    "requires": {
                        "remove-trailing-separator": "^1.0.1"
                    }
                },
                "to-regex-range": {
                    "version": "2.1.1",
                    "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-2.1.1.tgz",
                    "integrity": "sha1-fIDBe53+vlmeJzZ+DU3VWQFB2zg=",
                    "requires": {
                        "is-number": "^3.0.0",
                        "repeat-string": "^1.6.1"
                    }
                }
            }
        },
        "saxes": {
            "version": "5.0.1",
            "resolved": "https://registry.npmjs.org/saxes/-/saxes-5.0.1.tgz",
            "integrity": "sha512-5LBh1Tls8c9xgGjw3QrMwETmTMVk0oFgvrFSvWx62llR2hcEInrKNZ2GZCCuuy2lvWrdl5jhbpeqc5hRYKFOcw==",
            "requires": {
                "xmlchars": "^2.2.0"
            }
        },
        "semver": {
            "version": "6.3.0",
            "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
            "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw=="
        },
        "send": {
            "version": "0.17.1",
            "resolved": "https://registry.npmjs.org/send/-/send-0.17.1.tgz",
            "integrity": "sha512-BsVKsiGcQMFwT8UxypobUKyv7irCNRHk1T0G680vk88yf6LBByGcZJOTJCrTP2xVN6yI+XjPJcNuE3V4fT9sAg==",
            "requires": {
                "debug": "2.6.9",
                "depd": "~1.1.2",
                "destroy": "~1.0.4",
                "encodeurl": "~1.0.2",
                "escape-html": "~1.0.3",
                "etag": "~1.8.1",
                "fresh": "0.5.2",
                "http-errors": "~1.7.2",
                "mime": "1.6.0",
                "ms": "2.1.1",
                "on-finished": "~2.3.0",
                "range-parser": "~1.2.1",
                "statuses": "~1.5.0"
            },
            "dependencies": {
                "ms": {
                    "version": "2.1.1",
                    "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.1.tgz",
                    "integrity": "sha512-tgp+dl5cGk28utYktBsrFqA7HKgrhgPsg6Z/EfhWI4gl1Hwq8B/GmY/0oXZ6nF8hDVesS/FpnYaD/kOWhYQvyg=="
                }
            }
        },
        "serve-static": {
            "version": "1.14.1",
            "resolved": "https://registry.npmjs.org/serve-static/-/serve-static-1.14.1.tgz",
            "integrity": "sha512-JMrvUwE54emCYWlTI+hGrGv5I8dEwmco/00EvkzIIsR7MqrHonbD9pO2MOfFnpFntl7ecpZs+3mW+XbQZu9QCg==",
            "requires": {
                "encodeurl": "~1.0.2",
                "escape-html": "~1.0.3",
                "parseurl": "~1.3.3",
                "send": "0.17.1"
            }
        },
        "set-blocking": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/set-blocking/-/set-blocking-2.0.0.tgz",
            "integrity": "sha1-BF+XgtARrppoA93TgrJDkrPYkPc="
        },
        "set-value": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/set-value/-/set-value-2.0.1.tgz",
            "integrity": "sha512-JxHc1weCN68wRY0fhCoXpyK55m/XPHafOmK4UWD7m2CI14GMcFypt4w/0+NV5f/ZMby2F6S2wwA7fgynh9gWSw==",
            "requires": {
                "extend-shallow": "^2.0.1",
                "is-extendable": "^0.1.1",
                "is-plain-object": "^2.0.3",
                "split-string": "^3.0.1"
            },
            "dependencies": {
                "extend-shallow": {
                    "version": "2.0.1",
                    "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
                    "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
                    "requires": {
                        "is-extendable": "^0.1.0"
                    }
                }
            }
        },
        "setprototypeof": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.1.1.tgz",
            "integrity": "sha512-JvdAWfbXeIGaZ9cILp38HntZSFSo3mWg6xGcJJsd+d4aRMOqauag1C63dJfDw7OaMYwEbHMOxEZ1lqVRYP2OAw=="
        },
        "shebang-command": {
            "version": "1.2.0",
            "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-1.2.0.tgz",
            "integrity": "sha1-RKrGW2lbAzmJaMOfNj/uXer98eo=",
            "requires": {
                "shebang-regex": "^1.0.0"
            }
        },
        "shebang-regex": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-1.0.0.tgz",
            "integrity": "sha1-2kL0l0DAtC2yypcoVxyxkMmO/qM="
        },
        "shellwords": {
            "version": "0.1.1",
            "resolved": "https://registry.npmjs.org/shellwords/-/shellwords-0.1.1.tgz",
            "integrity": "sha512-vFwSUfQvqybiICwZY5+DAWIPLKsWO31Q91JSKl3UYv+K5c2QRPzn0qzec6QPu1Qc9eHYItiP3NdJqNVqetYAww==",
            "optional": true
        },
        "side-channel": {
            "version": "1.0.4",
            "resolved": "https://registry.npmjs.org/side-channel/-/side-channel-1.0.4.tgz",
            "integrity": "sha512-q5XPytqFEIKHkGdiMIrY10mvLRvnQh42/+GoBlFW3b2LXLE2xxJpZFdm94we0BaoV3RwJyGqg5wS7epxTv0Zvw==",
            "requires": {
                "call-bind": "^1.0.0",
                "get-intrinsic": "^1.0.2",
                "object-inspect": "^1.9.0"
            }
        },
        "signal-exit": {
            "version": "3.0.3",
            "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-3.0.3.tgz",
            "integrity": "sha512-VUJ49FC8U1OxwZLxIbTTrDvLnf/6TDgxZcK8wxR8zs13xpx7xbG60ndBlhNrFi2EMuFRoeDoJO7wthSLq42EjA=="
        },
        "sisteransi": {
            "version": "1.0.5",
            "resolved": "https://registry.npmjs.org/sisteransi/-/sisteransi-1.0.5.tgz",
            "integrity": "sha512-bLGGlR1QxBcynn2d5YmDX4MGjlZvy2MRBDRNHLJ8VI6l6+9FUiyTFNJ0IveOSP0bcXgVDPRcfGqA0pjaqUpfVg=="
        },
        "slash": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/slash/-/slash-3.0.0.tgz",
            "integrity": "sha512-g9Q1haeby36OSStwb4ntCGGGaKsaVSjQ68fBxoQcutl5fS1vuY18H3wSt3jFyFtrkx+Kz0V1G85A4MyAdDMi2Q=="
        },
        "snapdragon": {
            "version": "0.8.2",
            "resolved": "https://registry.npmjs.org/snapdragon/-/snapdragon-0.8.2.tgz",
            "integrity": "sha512-FtyOnWN/wCHTVXOMwvSv26d+ko5vWlIDD6zoUJ7LW8vh+ZBC8QdljveRP+crNrtBwioEUWy/4dMtbBjA4ioNlg==",
            "requires": {
                "base": "^0.11.1",
                "debug": "^2.2.0",
                "define-property": "^0.2.5",
                "extend-shallow": "^2.0.1",
                "map-cache": "^0.2.2",
                "source-map": "^0.5.6",
                "source-map-resolve": "^0.5.0",
                "use": "^3.1.0"
            },
            "dependencies": {
                "define-property": {
                    "version": "0.2.5",
                    "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
                    "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
                    "requires": {
                        "is-descriptor": "^0.1.0"
                    }
                },
                "extend-shallow": {
                    "version": "2.0.1",
                    "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
                    "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
                    "requires": {
                        "is-extendable": "^0.1.0"
                    }
                },
                "source-map": {
                    "version": "0.5.7",
                    "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.5.7.tgz",
                    "integrity": "sha1-igOdLRAh0i0eoUyA2OpGi6LvP8w="
                }
            }
        },
        "snapdragon-node": {
            "version": "2.1.1",
            "resolved": "https://registry.npmjs.org/snapdragon-node/-/snapdragon-node-2.1.1.tgz",
            "integrity": "sha512-O27l4xaMYt/RSQ5TR3vpWCAB5Kb/czIcqUFOM/C4fYcLnbZUc1PkjTAMjof2pBWaSTwOUd6qUHcFGVGj7aIwnw==",
            "requires": {
                "define-property": "^1.0.0",
                "isobject": "^3.0.0",
                "snapdragon-util": "^3.0.1"
            },
            "dependencies": {
                "define-property": {
                    "version": "1.0.0",
                    "resolved": "https://registry.npmjs.org/define-property/-/define-property-1.0.0.tgz",
                    "integrity": "sha1-dp66rz9KY6rTr56NMEybvnm/sOY=",
                    "requires": {
                        "is-descriptor": "^1.0.0"
                    }
                },
                "is-accessor-descriptor": {
                    "version": "1.0.0",
                    "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
                    "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
                    "requires": {
                        "kind-of": "^6.0.0"
                    }
                },
                "is-data-descriptor": {
                    "version": "1.0.0",
                    "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
                    "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
                    "requires": {
                        "kind-of": "^6.0.0"
                    }
                },
                "is-descriptor": {
                    "version": "1.0.2",
                    "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",
                    "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
                    "requires": {
                        "is-accessor-descriptor": "^1.0.0",
                        "is-data-descriptor": "^1.0.0",
                        "kind-of": "^6.0.2"
                    }
                }
            }
        },
        "snapdragon-util": {
            "version": "3.0.1",
            "resolved": "https://registry.npmjs.org/snapdragon-util/-/snapdragon-util-3.0.1.tgz",
            "integrity": "sha512-mbKkMdQKsjX4BAL4bRYTj21edOf8cN7XHdYUJEe+Zn99hVEYcMvKPct1IqNe7+AZPirn8BCDOQBHQZknqmKlZQ==",
            "requires": {
                "kind-of": "^3.2.0"
            },
            "dependencies": {
                "kind-of": {
                    "version": "3.2.2",
                    "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
                    "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
                    "requires": {
                        "is-buffer": "^1.1.5"
                    }
                }
            }
        },
        "source-map": {
            "version": "0.6.1",
            "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
            "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g=="
        },
        "source-map-resolve": {
            "version": "0.5.3",
            "resolved": "https://registry.npmjs.org/source-map-resolve/-/source-map-resolve-0.5.3.tgz",
            "integrity": "sha512-Htz+RnsXWk5+P2slx5Jh3Q66vhQj1Cllm0zvnaY98+NFx+Dv2CF/f5O/t8x+KaNdrdIAsruNzoh/KpialbqAnw==",
            "requires": {
                "atob": "^2.1.2",
                "decode-uri-component": "^0.2.0",
                "resolve-url": "^0.2.1",
                "source-map-url": "^0.4.0",
                "urix": "^0.1.0"
            }
        },
        "source-map-support": {
            "version": "0.5.19",
            "resolved": "https://registry.npmjs.org/source-map-support/-/source-map-support-0.5.19.tgz",
            "integrity": "sha512-Wonm7zOCIJzBGQdB+thsPar0kYuCIzYvxZwlBa87yi/Mdjv7Tip2cyVbLj5o0cFPN4EVkuTwb3GDDyUx2DGnGw==",
            "requires": {
                "buffer-from": "^1.0.0",
                "source-map": "^0.6.0"
            }
        },
        "source-map-url": {
            "version": "0.4.1",
            "resolved": "https://registry.npmjs.org/source-map-url/-/source-map-url-0.4.1.tgz",
            "integrity": "sha512-cPiFOTLUKvJFIg4SKVScy4ilPPW6rFgMgfuZJPNoDuMs3nC1HbMUycBoJw77xFIp6z1UJQJOfx6C9GMH80DiTw=="
        },
        "spdx-correct": {
            "version": "3.1.1",
            "resolved": "https://registry.npmjs.org/spdx-correct/-/spdx-correct-3.1.1.tgz",
            "integrity": "sha512-cOYcUWwhCuHCXi49RhFRCyJEK3iPj1Ziz9DpViV3tbZOwXD49QzIN3MpOLJNxh2qwq2lJJZaKMVw9qNi4jTC0w==",
            "requires": {
                "spdx-expression-parse": "^3.0.0",
                "spdx-license-ids": "^3.0.0"
            }
        },
        "spdx-exceptions": {
            "version": "2.3.0",
            "resolved": "https://registry.npmjs.org/spdx-exceptions/-/spdx-exceptions-2.3.0.tgz",
            "integrity": "sha512-/tTrYOC7PPI1nUAgx34hUpqXuyJG+DTHJTnIULG4rDygi4xu/tfgmq1e1cIRwRzwZgo4NLySi+ricLkZkw4i5A=="
        },
        "spdx-expression-parse": {
            "version": "3.0.1",
            "resolved": "https://registry.npmjs.org/spdx-expression-parse/-/spdx-expression-parse-3.0.1.tgz",
            "integrity": "sha512-cbqHunsQWnJNE6KhVSMsMeH5H/L9EpymbzqTQ3uLwNCLZ1Q481oWaofqH7nO6V07xlXwY6PhQdQ2IedWx/ZK4Q==",
            "requires": {
                "spdx-exceptions": "^2.1.0",
                "spdx-license-ids": "^3.0.0"
            }
        },
        "spdx-license-ids": {
            "version": "3.0.7",
            "resolved": "https://registry.npmjs.org/spdx-license-ids/-/spdx-license-ids-3.0.7.tgz",
            "integrity": "sha512-U+MTEOO0AiDzxwFvoa4JVnMV6mZlJKk2sBLt90s7G0Gd0Mlknc7kxEn3nuDPNZRta7O2uy8oLcZLVT+4sqNZHQ=="
        },
        "split-string": {
            "version": "3.1.0",
            "resolved": "https://registry.npmjs.org/split-string/-/split-string-3.1.0.tgz",
            "integrity": "sha512-NzNVhJDYpwceVVii8/Hu6DKfD2G+NrQHlS/V/qgv763EYudVwEcMQNxd2lh+0VrUByXN/oJkl5grOhYWvQUYiw==",
            "requires": {
                "extend-shallow": "^3.0.0"
            }
        },
        "sprintf-js": {
            "version": "1.0.3",
            "resolved": "https://registry.npmjs.org/sprintf-js/-/sprintf-js-1.0.3.tgz",
            "integrity": "sha1-BOaSb2YolTVPPdAVIDYzuFcpfiw="
        },
        "sshpk": {
            "version": "1.16.1",
            "resolved": "https://registry.npmjs.org/sshpk/-/sshpk-1.16.1.tgz",
            "integrity": "sha512-HXXqVUq7+pcKeLqqZj6mHFUMvXtOJt1uoUx09pFW6011inTMxqI8BA8PM95myrIyyKwdnzjdFjLiE6KBPVtJIg==",
            "requires": {
                "asn1": "~0.2.3",
                "assert-plus": "^1.0.0",
                "bcrypt-pbkdf": "^1.0.0",
                "dashdash": "^1.12.0",
                "ecc-jsbn": "~0.1.1",
                "getpass": "^0.1.1",
                "jsbn": "~0.1.0",
                "safer-buffer": "^2.0.2",
                "tweetnacl": "~0.14.0"
            }
        },
        "stack-utils": {
            "version": "2.0.3",
            "resolved": "https://registry.npmjs.org/stack-utils/-/stack-utils-2.0.3.tgz",
            "integrity": "sha512-gL//fkxfWUsIlFL2Tl42Cl6+HFALEaB1FU76I/Fy+oZjRreP7OPMXFlGbxM7NQsI0ZpUfw76sHnv0WNYuTb7Iw==",
            "requires": {
                "escape-string-regexp": "^2.0.0"
            },
            "dependencies": {
                "escape-string-regexp": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-2.0.0.tgz",
                    "integrity": "sha512-UpzcLCXolUWcNu5HtVMHYdXJjArjsF9C0aNnquZYY4uW/Vu0miy5YoWvbV345HauVvcAUnpRuhMMcqTcGOY2+w=="
                }
            }
        },
        "static-extend": {
            "version": "0.1.2",
            "resolved": "https://registry.npmjs.org/static-extend/-/static-extend-0.1.2.tgz",
            "integrity": "sha1-YICcOcv/VTNyJv1eC1IPNB8ftcY=",
            "requires": {
                "define-property": "^0.2.5",
                "object-copy": "^0.1.0"
            },
            "dependencies": {
                "define-property": {
                    "version": "0.2.5",
                    "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
                    "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
                    "requires": {
                        "is-descriptor": "^0.1.0"
                    }
                }
            }
        },
        "statuses": {
            "version": "1.5.0",
            "resolved": "https://registry.npmjs.org/statuses/-/statuses-1.5.0.tgz",
            "integrity": "sha1-Fhx9rBd2Wf2YEfQ3cfqZOBR4Yow="
        },
        "stealthy-require": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/stealthy-require/-/stealthy-require-1.1.1.tgz",
            "integrity": "sha1-NbCYdbT/SfJqd35QmzCQoyJr8ks="
        },
        "string-length": {
            "version": "4.0.2",
            "resolved": "https://registry.npmjs.org/string-length/-/string-length-4.0.2.tgz",
            "integrity": "sha512-+l6rNN5fYHNhZZy41RXsYptCjA2Igmq4EG7kZAYFQI1E1VTXarr6ZPXBg6eq7Y6eK4FEhY6AJlyuFIb/v/S0VQ==",
            "requires": {
                "char-regex": "^1.0.2",
                "strip-ansi": "^6.0.0"
            }
        },
        "string-width": {
            "version": "4.2.2",
            "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.2.tgz",
            "integrity": "sha512-XBJbT3N4JhVumXE0eoLU9DCjcaF92KLNqTmFCnG1pf8duUxFGwtP6AD6nkjw9a3IdiRtL3E2w3JDiE/xi3vOeA==",
            "requires": {
                "emoji-regex": "^8.0.0",
                "is-fullwidth-code-point": "^3.0.0",
                "strip-ansi": "^6.0.0"
            }
        },
        "string_decoder": {
            "version": "1.3.0",
            "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.3.0.tgz",
            "integrity": "sha512-hkRX8U1WjJFd8LsDJ2yQ/wWWxaopEsABU1XfkM8A+j0+85JAGppt16cr1Whg6KIbb4okU6Mql6BOj+uup/wKeA==",
            "requires": {
                "safe-buffer": "~5.2.0"
            },
            "dependencies": {
                "safe-buffer": {
                    "version": "5.2.1",
                    "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz",
                    "integrity": "sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ=="
                }
            }
        },
        "strip-ansi": {
            "version": "6.0.0",
            "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.0.tgz",
            "integrity": "sha512-AuvKTrTfQNYNIctbR1K/YGTR1756GycPsg7b9bdV9Duqur4gv6aKqHXah67Z8ImS7WEz5QVcOtlfW2rZEugt6w==",
            "requires": {
                "ansi-regex": "^5.0.0"
            }
        },
        "strip-bom": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/strip-bom/-/strip-bom-4.0.0.tgz",
            "integrity": "sha512-3xurFv5tEgii33Zi8Jtp55wEIILR9eh34FAW00PZf+JnSsTmV/ioewSgQl97JHvgjoRGwPShsWm+IdrxB35d0w=="
        },
        "strip-eof": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/strip-eof/-/strip-eof-1.0.0.tgz",
            "integrity": "sha1-u0P/VZim6wXYm1n80SnJgzE2Br8="
        },
        "strip-final-newline": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/strip-final-newline/-/strip-final-newline-2.0.0.tgz",
            "integrity": "sha512-BrpvfNAE3dcvq7ll3xVumzjKjZQ5tI1sEUIKr3Uoks0XUl45St3FlatVqef9prk4jRDzhW6WZg+3bk93y6pLjA=="
        },
        "superagent": {
            "version": "6.1.0",
            "resolved": "https://registry.npmjs.org/superagent/-/superagent-6.1.0.tgz",
            "integrity": "sha512-OUDHEssirmplo3F+1HWKUrUjvnQuA+nZI6i/JJBdXb5eq9IyEQwPyPpqND+SSsxf6TygpBEkUjISVRN4/VOpeg==",
            "requires": {
                "component-emitter": "^1.3.0",
                "cookiejar": "^2.1.2",
                "debug": "^4.1.1",
                "fast-safe-stringify": "^2.0.7",
                "form-data": "^3.0.0",
                "formidable": "^1.2.2",
                "methods": "^1.1.2",
                "mime": "^2.4.6",
                "qs": "^6.9.4",
                "readable-stream": "^3.6.0",
                "semver": "^7.3.2"
            },
            "dependencies": {
                "debug": {
                    "version": "4.3.1",
                    "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.1.tgz",
                    "integrity": "sha512-doEwdvm4PCeK4K3RQN2ZC2BYUBaxwLARCqZmMjtF8a51J2Rb0xpVloFRnCODwqjpwnAoao4pelN8l3RJdv3gRQ==",
                    "requires": {
                        "ms": "2.1.2"
                    }
                },
                "form-data": {
                    "version": "3.0.1",
                    "resolved": "https://registry.npmjs.org/form-data/-/form-data-3.0.1.tgz",
                    "integrity": "sha512-RHkBKtLWUVwd7SqRIvCZMEvAMoGUp0XU+seQiZejj0COz3RI3hWP4sCv3gZWWLjJTd7rGwcsF5eKZGii0r/hbg==",
                    "requires": {
                        "asynckit": "^0.4.0",
                        "combined-stream": "^1.0.8",
                        "mime-types": "^2.1.12"
                    }
                },
                "mime": {
                    "version": "2.5.2",
                    "resolved": "https://registry.npmjs.org/mime/-/mime-2.5.2.tgz",
                    "integrity": "sha512-tqkh47FzKeCPD2PUiPB6pkbMzsCasjxAfC62/Wap5qrUWcb+sFasXUC5I3gYM5iBM8v/Qpn4UK0x+j0iHyFPDg=="
                },
                "ms": {
                    "version": "2.1.2",
                    "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
                    "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w=="
                },
                "qs": {
                    "version": "6.10.1",
                    "resolved": "https://registry.npmjs.org/qs/-/qs-6.10.1.tgz",
                    "integrity": "sha512-M528Hph6wsSVOBiYUnGf+K/7w0hNshs/duGsNXPUCLH5XAqjEtiPGwNONLV0tBH8NoGb0mvD5JubnUTrujKDTg==",
                    "requires": {
                        "side-channel": "^1.0.4"
                    }
                },
                "semver": {
                    "version": "7.3.5",
                    "resolved": "https://registry.npmjs.org/semver/-/semver-7.3.5.tgz",
                    "integrity": "sha512-PoeGJYh8HK4BTO/a9Tf6ZG3veo/A7ZVsYrSA6J8ny9nb3B1VrpkuN+z9OE5wfE5p6H4LchYZsegiQgbJD94ZFQ==",
                    "requires": {
                        "lru-cache": "^6.0.0"
                    }
                }
            }
        },
        "supertest": {
            "version": "6.1.3",
            "resolved": "https://registry.npmjs.org/supertest/-/supertest-6.1.3.tgz",
            "integrity": "sha512-v2NVRyP73XDewKb65adz+yug1XMtmvij63qIWHZzSX8tp6wiq6xBLUy4SUAd2NII6wIipOmHT/FD9eicpJwdgQ==",
            "requires": {
                "methods": "^1.1.2",
                "superagent": "^6.1.0"
            }
        },
        "supports-color": {
            "version": "7.2.0",
            "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
            "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
            "requires": {
                "has-flag": "^4.0.0"
            }
        },
        "supports-hyperlinks": {
            "version": "2.2.0",
            "resolved": "https://registry.npmjs.org/supports-hyperlinks/-/supports-hyperlinks-2.2.0.tgz",
            "integrity": "sha512-6sXEzV5+I5j8Bmq9/vUphGRM/RJNT9SCURJLjwfOg51heRtguGWDzcaBlgAzKhQa0EVNpPEKzQuBwZ8S8WaCeQ==",
            "requires": {
                "has-flag": "^4.0.0",
                "supports-color": "^7.0.0"
            }
        },
        "symbol-tree": {
            "version": "3.2.4",
            "resolved": "https://registry.npmjs.org/symbol-tree/-/symbol-tree-3.2.4.tgz",
            "integrity": "sha512-9QNk5KwDF+Bvz+PyObkmSYjI5ksVUYtjW7AU22r2NKcfLJcXp96hkDWU3+XndOsUb+AQ9QhfzfCT2O+CNWT5Tw=="
        },
        "terminal-link": {
            "version": "2.1.1",
            "resolved": "https://registry.npmjs.org/terminal-link/-/terminal-link-2.1.1.tgz",
            "integrity": "sha512-un0FmiRUQNr5PJqy9kP7c40F5BOfpGlYTrxonDChEZB7pzZxRNp/bt+ymiy9/npwXya9KH99nJ/GXFIiUkYGFQ==",
            "requires": {
                "ansi-escapes": "^4.2.1",
                "supports-hyperlinks": "^2.0.0"
            }
        },
        "test-exclude": {
            "version": "6.0.0",
            "resolved": "https://registry.npmjs.org/test-exclude/-/test-exclude-6.0.0.tgz",
            "integrity": "sha512-cAGWPIyOHU6zlmg88jwm7VRyXnMN7iV68OGAbYDk/Mh/xC/pzVPlQtY6ngoIH/5/tciuhGfvESU8GrHrcxD56w==",
            "requires": {
                "@istanbuljs/schema": "^0.1.2",
                "glob": "^7.1.4",
                "minimatch": "^3.0.4"
            }
        },
        "throat": {
            "version": "5.0.0",
            "resolved": "https://registry.npmjs.org/throat/-/throat-5.0.0.tgz",
            "integrity": "sha512-fcwX4mndzpLQKBS1DVYhGAcYaYt7vsHNIvQV+WXMvnow5cgjPphq5CaayLaGsjRdSCKZFNGt7/GYAuXaNOiYCA=="
        },
        "tmpl": {
            "version": "1.0.4",
            "resolved": "https://registry.npmjs.org/tmpl/-/tmpl-1.0.4.tgz",
            "integrity": "sha1-I2QN17QtAEM5ERQIIOXPRA5SHdE="
        },
        "to-fast-properties": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/to-fast-properties/-/to-fast-properties-2.0.0.tgz",
            "integrity": "sha1-3F5pjL0HkmW8c+A3doGk5Og/YW4="
        },
        "to-object-path": {
            "version": "0.3.0",
            "resolved": "https://registry.npmjs.org/to-object-path/-/to-object-path-0.3.0.tgz",
            "integrity": "sha1-KXWIt7Dn4KwI4E5nL4XB9JmeF68=",
            "requires": {
                "kind-of": "^3.0.2"
            },
            "dependencies": {
                "kind-of": {
                    "version": "3.2.2",
                    "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
                    "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
                    "requires": {
                        "is-buffer": "^1.1.5"
                    }
                }
            }
        },
        "to-regex": {
            "version": "3.0.2",
            "resolved": "https://registry.npmjs.org/to-regex/-/to-regex-3.0.2.tgz",
            "integrity": "sha512-FWtleNAtZ/Ki2qtqej2CXTOayOH9bHDQF+Q48VpWyDXjbYxA4Yz8iDB31zXOBUlOHHKidDbqGVrTUvQMPmBGBw==",
            "requires": {
                "define-property": "^2.0.2",
                "extend-shallow": "^3.0.2",
                "regex-not": "^1.0.2",
                "safe-regex": "^1.1.0"
            }
        },
        "to-regex-range": {
            "version": "5.0.1",
            "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
            "integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
            "requires": {
                "is-number": "^7.0.0"
            }
        },
        "toidentifier": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/toidentifier/-/toidentifier-1.0.0.tgz",
            "integrity": "sha512-yaOH/Pk/VEhBWWTlhI+qXxDFXlejDGcQipMlyxda9nthulaxLZUNcUqFxokp0vcYnvteJln5FNQDRrxj3YcbVw=="
        },
        "tough-cookie": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/tough-cookie/-/tough-cookie-4.0.0.tgz",
            "integrity": "sha512-tHdtEpQCMrc1YLrMaqXXcj6AxhYi/xgit6mZu1+EDWUn+qhUf8wMQoFIy9NXuq23zAwtcB0t/MjACGR18pcRbg==",
            "requires": {
                "psl": "^1.1.33",
                "punycode": "^2.1.1",
                "universalify": "^0.1.2"
            }
        },
        "tr46": {
            "version": "2.0.2",
            "resolved": "https://registry.npmjs.org/tr46/-/tr46-2.0.2.tgz",
            "integrity": "sha512-3n1qG+/5kg+jrbTzwAykB5yRYtQCTqOGKq5U5PE3b0a1/mzo6snDhjGS0zJVJunO0NrT3Dg1MLy5TjWP/UJppg==",
            "requires": {
                "punycode": "^2.1.1"
            }
        },
        "tunnel-agent": {
            "version": "0.6.0",
            "resolved": "https://registry.npmjs.org/tunnel-agent/-/tunnel-agent-0.6.0.tgz",
            "integrity": "sha1-J6XeoGs2sEoKmWZ3SykIaPD8QP0=",
            "requires": {
                "safe-buffer": "^5.0.1"
            }
        },
        "tweetnacl": {
            "version": "0.14.5",
            "resolved": "https://registry.npmjs.org/tweetnacl/-/tweetnacl-0.14.5.tgz",
            "integrity": "sha1-WuaBd/GS1EViadEIr6k/+HQ/T2Q="
        },
        "type-check": {
            "version": "0.3.2",
            "resolved": "https://registry.npmjs.org/type-check/-/type-check-0.3.2.tgz",
            "integrity": "sha1-WITKtRLPHTVeP7eE8wgEsrUg23I=",
            "requires": {
                "prelude-ls": "~1.1.2"
            }
        },
        "type-detect": {
            "version": "4.0.8",
            "resolved": "https://registry.npmjs.org/type-detect/-/type-detect-4.0.8.tgz",
            "integrity": "sha512-0fr/mIH1dlO+x7TlcMy+bIDqKPsw/70tVyeHW787goQjhmqaZe10uwLujubK9q9Lg6Fiho1KUKDYz0Z7k7g5/g=="
        },
        "type-fest": {
            "version": "0.8.1",
            "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.8.1.tgz",
            "integrity": "sha512-4dbzIzqvjtgiM5rw1k5rEHtBANKmdudhGyBEajN01fEyhaAIhsoKNy6y7+IN93IfpFtwY9iqi7kD+xwKhQsNJA=="
        },
        "type-is": {
            "version": "1.6.18",
            "resolved": "https://registry.npmjs.org/type-is/-/type-is-1.6.18.tgz",
            "integrity": "sha512-TkRKr9sUTxEH8MdfuCSP7VizJyzRNMjj2J2do2Jr3Kym598JVdEksuzPQCnlFPW4ky9Q+iA+ma9BGm06XQBy8g==",
            "requires": {
                "media-typer": "0.3.0",
                "mime-types": "~2.1.24"
            }
        },
        "typedarray-to-buffer": {
            "version": "3.1.5",
            "resolved": "https://registry.npmjs.org/typedarray-to-buffer/-/typedarray-to-buffer-3.1.5.tgz",
            "integrity": "sha512-zdu8XMNEDepKKR+XYOXAVPtWui0ly0NtohUscw+UmaHiAWT8hrV1rr//H6V+0DvJ3OQ19S979M0laLfX8rm82Q==",
            "requires": {
                "is-typedarray": "^1.0.0"
            }
        },
        "union-value": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/union-value/-/union-value-1.0.1.tgz",
            "integrity": "sha512-tJfXmxMeWYnczCVs7XAEvIV7ieppALdyepWMkHkwciRpZraG/xwT+s2JN8+pr1+8jCRf80FFzvr+MpQeeoF4Xg==",
            "requires": {
                "arr-union": "^3.1.0",
                "get-value": "^2.0.6",
                "is-extendable": "^0.1.1",
                "set-value": "^2.0.1"
            }
        },
        "universalify": {
            "version": "0.1.2",
            "resolved": "https://registry.npmjs.org/universalify/-/universalify-0.1.2.tgz",
            "integrity": "sha512-rBJeI5CXAlmy1pV+617WB9J63U6XcazHHF2f2dbJix4XzpUF0RS3Zbj0FGIOCAva5P/d/GBOYaACQ1w+0azUkg=="
        },
        "unpipe": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/unpipe/-/unpipe-1.0.0.tgz",
            "integrity": "sha1-sr9O6FFKrmFltIF4KdIbLvSZBOw="
        },
        "unset-value": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/unset-value/-/unset-value-1.0.0.tgz",
            "integrity": "sha1-g3aHP30jNRef+x5vw6jtDfyKtVk=",
            "requires": {
                "has-value": "^0.3.1",
                "isobject": "^3.0.0"
            },
            "dependencies": {
                "has-value": {
                    "version": "0.3.1",
                    "resolved": "https://registry.npmjs.org/has-value/-/has-value-0.3.1.tgz",
                    "integrity": "sha1-ex9YutpiyoJ+wKIHgCVlSEWZXh8=",
                    "requires": {
                        "get-value": "^2.0.3",
                        "has-values": "^0.1.4",
                        "isobject": "^2.0.0"
                    },
                    "dependencies": {
                        "isobject": {
                            "version": "2.1.0",
                            "resolved": "https://registry.npmjs.org/isobject/-/isobject-2.1.0.tgz",
                            "integrity": "sha1-8GVWEJaj8dou9GJy+BXIQNh+DIk=",
                            "requires": {
                                "isarray": "1.0.0"
                            }
                        }
                    }
                },
                "has-values": {
                    "version": "0.1.4",
                    "resolved": "https://registry.npmjs.org/has-values/-/has-values-0.1.4.tgz",
                    "integrity": "sha1-bWHeldkd/Km5oCCJrThL/49it3E="
                }
            }
        },
        "uri-js": {
            "version": "4.4.1",
            "resolved": "https://registry.npmjs.org/uri-js/-/uri-js-4.4.1.tgz",
            "integrity": "sha512-7rKUyy33Q1yc98pQ1DAmLtwX109F7TIfWlW1Ydo8Wl1ii1SeHieeh0HHfPeL2fMXK6z0s8ecKs9frCuLJvndBg==",
            "requires": {
                "punycode": "^2.1.0"
            }
        },
        "urix": {
            "version": "0.1.0",
            "resolved": "https://registry.npmjs.org/urix/-/urix-0.1.0.tgz",
            "integrity": "sha1-2pN/emLiH+wf0Y1Js1wpNQZ6bHI="
        },
        "use": {
            "version": "3.1.1",
            "resolved": "https://registry.npmjs.org/use/-/use-3.1.1.tgz",
            "integrity": "sha512-cwESVXlO3url9YWlFW/TA9cshCEhtu7IKJ/p5soJ/gGpj7vbvFrAY/eIioQ6Dw23KjZhYgiIo8HOs1nQ2vr/oQ=="
        },
        "util-deprecate": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
            "integrity": "sha1-RQ1Nyfpw3nMnYvvS1KKJgUGaDM8="
        },
        "utils-merge": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/utils-merge/-/utils-merge-1.0.1.tgz",
            "integrity": "sha1-n5VxD1CiZ5R7LMwSR0HBAoQn5xM="
        },
        "uuid": {
            "version": "8.3.2",
            "resolved": "https://registry.npmjs.org/uuid/-/uuid-8.3.2.tgz",
            "integrity": "sha512-+NYs2QeMWy+GWFOEm9xnn6HCDp0l7QBD7ml8zLUmJ+93Q5NF0NocErnwkTkXVFNiX3/fpC6afS8Dhb/gz7R7eg==",
            "optional": true
        },
        "v8-to-istanbul": {
            "version": "7.1.1",
            "resolved": "https://registry.npmjs.org/v8-to-istanbul/-/v8-to-istanbul-7.1.1.tgz",
            "integrity": "sha512-p0BB09E5FRjx0ELN6RgusIPsSPhtgexSRcKETybEs6IGOTXJSZqfwxp7r//55nnu0f1AxltY5VvdVqy2vZf9AA==",
            "requires": {
                "@types/istanbul-lib-coverage": "^2.0.1",
                "convert-source-map": "^1.6.0",
                "source-map": "^0.7.3"
            },
            "dependencies": {
                "source-map": {
                    "version": "0.7.3",
                    "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.7.3.tgz",
                    "integrity": "sha512-CkCj6giN3S+n9qrYiBTX5gystlENnRW5jZeNLHpe6aue+SrHcG5VYwujhW9s4dY31mEGsxBDrHR6oI69fTXsaQ=="
                }
            }
        },
        "validate-npm-package-license": {
            "version": "3.0.4",
            "resolved": "https://registry.npmjs.org/validate-npm-package-license/-/validate-npm-package-license-3.0.4.tgz",
            "integrity": "sha512-DpKm2Ui/xN7/HQKCtpZxoRWBhZ9Z0kqtygG8XCgNQ8ZlDnxuQmWhj566j8fN4Cu3/JmbhsDo7fcAJq4s9h27Ew==",
            "requires": {
                "spdx-correct": "^3.0.0",
                "spdx-expression-parse": "^3.0.0"
            }
        },
        "vary": {
            "version": "1.1.2",
            "resolved": "https://registry.npmjs.org/vary/-/vary-1.1.2.tgz",
            "integrity": "sha1-IpnwLG3tMNSllhsLn3RSShj2NPw="
        },
        "verror": {
            "version": "1.10.0",
            "resolved": "https://registry.npmjs.org/verror/-/verror-1.10.0.tgz",
            "integrity": "sha1-OhBcoXBTr1XW4nDB+CiGguGNpAA=",
            "requires": {
                "assert-plus": "^1.0.0",
                "core-util-is": "1.0.2",
                "extsprintf": "^1.2.0"
            }
        },
        "w3c-hr-time": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/w3c-hr-time/-/w3c-hr-time-1.0.2.tgz",
            "integrity": "sha512-z8P5DvDNjKDoFIHK7q8r8lackT6l+jo/Ye3HOle7l9nICP9lf1Ci25fy9vHd0JOWewkIFzXIEig3TdKT7JQ5fQ==",
            "requires": {
                "browser-process-hrtime": "^1.0.0"
            }
        },
        "w3c-xmlserializer": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/w3c-xmlserializer/-/w3c-xmlserializer-2.0.0.tgz",
            "integrity": "sha512-4tzD0mF8iSiMiNs30BiLO3EpfGLZUT2MSX/G+o7ZywDzliWQ3OPtTZ0PTC3B3ca1UAf4cJMHB+2Bf56EriJuRA==",
            "requires": {
                "xml-name-validator": "^3.0.0"
            }
        },
        "walker": {
            "version": "1.0.7",
            "resolved": "https://registry.npmjs.org/walker/-/walker-1.0.7.tgz",
            "integrity": "sha1-L3+bj9ENZ3JisYqITijRlhjgKPs=",
            "requires": {
                "makeerror": "1.0.x"
            }
        },
        "webidl-conversions": {
            "version": "6.1.0",
            "resolved": "https://registry.npmjs.org/webidl-conversions/-/webidl-conversions-6.1.0.tgz",
            "integrity": "sha512-qBIvFLGiBpLjfwmYAaHPXsn+ho5xZnGvyGvsarywGNc8VyQJUMHJ8OBKGGrPER0okBeMDaan4mNBlgBROxuI8w=="
        },
        "whatwg-encoding": {
            "version": "1.0.5",
            "resolved": "https://registry.npmjs.org/whatwg-encoding/-/whatwg-encoding-1.0.5.tgz",
            "integrity": "sha512-b5lim54JOPN9HtzvK9HFXvBma/rnfFeqsic0hSpjtDbVxR3dJKLc+KB4V6GgiGOvl7CY/KNh8rxSo9DKQrnUEw==",
            "requires": {
                "iconv-lite": "0.4.24"
            }
        },
        "whatwg-mimetype": {
            "version": "2.3.0",
            "resolved": "https://registry.npmjs.org/whatwg-mimetype/-/whatwg-mimetype-2.3.0.tgz",
            "integrity": "sha512-M4yMwr6mAnQz76TbJm914+gPpB/nCwvZbJU28cUD6dR004SAxDLOOSUaB1JDRqLtaOV/vi0IC5lEAGFgrjGv/g=="
        },
        "whatwg-url": {
            "version": "8.5.0",
            "resolved": "https://registry.npmjs.org/whatwg-url/-/whatwg-url-8.5.0.tgz",
            "integrity": "sha512-fy+R77xWv0AiqfLl4nuGUlQ3/6b5uNfQ4WAbGQVMYshCTCCPK9psC1nWh3XHuxGVCtlcDDQPQW1csmmIQo+fwg==",
            "requires": {
                "lodash": "^4.7.0",
                "tr46": "^2.0.2",
                "webidl-conversions": "^6.1.0"
            }
        },
        "which": {
            "version": "1.3.1",
            "resolved": "https://registry.npmjs.org/which/-/which-1.3.1.tgz",
            "integrity": "sha512-HxJdYWq1MTIQbJ3nw0cqssHoTNU267KlrDuGZ1WYlxDStUtKUhOaJmh112/TZmHxxUfuJqPXSOm7tDyas0OSIQ==",
            "requires": {
                "isexe": "^2.0.0"
            }
        },
        "which-module": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/which-module/-/which-module-2.0.0.tgz",
            "integrity": "sha1-2e8H3Od7mQK4o6j6SzHD4/fm6Ho="
        },
        "word-wrap": {
            "version": "1.2.3",
            "resolved": "https://registry.npmjs.org/word-wrap/-/word-wrap-1.2.3.tgz",
            "integrity": "sha512-Hz/mrNwitNRh/HUAtM/VT/5VH+ygD6DV7mYKZAtHOrbs8U7lvPS6xf7EJKMF0uW1KJCl0H701g3ZGus+muE5vQ=="
        },
        "wrap-ansi": {
            "version": "6.2.0",
            "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-6.2.0.tgz",
            "integrity": "sha512-r6lPcBGxZXlIcymEu7InxDMhdW0KDxpLgoFLcguasxCaJ/SOIZwINatK9KY/tf+ZrlywOKU0UDj3ATXUBfxJXA==",
            "requires": {
                "ansi-styles": "^4.0.0",
                "string-width": "^4.1.0",
                "strip-ansi": "^6.0.0"
            }
        },
        "wrappy": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
            "integrity": "sha1-tSQ9jz7BqjXxNkYFvA0QNuMKtp8="
        },
        "write-file-atomic": {
            "version": "3.0.3",
            "resolved": "https://registry.npmjs.org/write-file-atomic/-/write-file-atomic-3.0.3.tgz",
            "integrity": "sha512-AvHcyZ5JnSfq3ioSyjrBkH9yW4m7Ayk8/9My/DD9onKeu/94fwrMocemO2QAJFAlnnDN+ZDS+ZjAR5ua1/PV/Q==",
            "requires": {
                "imurmurhash": "^0.1.4",
                "is-typedarray": "^1.0.0",
                "signal-exit": "^3.0.2",
                "typedarray-to-buffer": "^3.1.5"
            }
        },
        "ws": {
            "version": "7.4.5",
            "resolved": "https://registry.npmjs.org/ws/-/ws-7.4.5.tgz",
            "integrity": "sha512-xzyu3hFvomRfXKH8vOFMU3OguG6oOvhXMo3xsGy3xWExqaM2dxBbVxuD99O7m3ZUFMvvscsZDqxfgMaRr/Nr1g=="
        },
        "xml-name-validator": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/xml-name-validator/-/xml-name-validator-3.0.0.tgz",
            "integrity": "sha512-A5CUptxDsvxKJEU3yO6DuWBSJz/qizqzJKOMIfUJHETbBw/sFaDxgd6fxm1ewUaM0jZ444Fc5vC5ROYurg/4Pw=="
        },
        "xmlchars": {
            "version": "2.2.0",
            "resolved": "https://registry.npmjs.org/xmlchars/-/xmlchars-2.2.0.tgz",
            "integrity": "sha512-JZnDKK8B0RCDw84FNdDAIpZK+JuJw+s7Lz8nksI7SIuU3UXJJslUthsi+uWBUYOwPFwW7W7PRLRfUKpxjtjFCw=="
        },
        "y18n": {
            "version": "4.0.3",
            "resolved": "https://registry.npmjs.org/y18n/-/y18n-4.0.3.tgz",
            "integrity": "sha512-JKhqTOwSrqNA1NY5lSztJ1GrBiUodLMmIZuLiDaMRJ+itFd+ABVE8XBjOvIWL+rSqNDC74LCSFmlb/U4UZ4hJQ=="
        },
        "yallist": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/yallist/-/yallist-4.0.0.tgz",
            "integrity": "sha512-3wdGidZyq5PB084XLES5TpOSRA3wjXAlIWMhum2kRcv/41Sn2emQ0dycQW4uZXLejwKvg6EsvbdlVL+FYEct7A=="
        },
        "yargs": {
            "version": "15.4.1",
            "resolved": "https://registry.npmjs.org/yargs/-/yargs-15.4.1.tgz",
            "integrity": "sha512-aePbxDmcYW++PaqBsJ+HYUFwCdv4LVvdnhBy78E57PIor8/OVvhMrADFFEDh8DHDFRv/O9i3lPhsENjO7QX0+A==",
            "requires": {
                "cliui": "^6.0.0",
                "decamelize": "^1.2.0",
                "find-up": "^4.1.0",
                "get-caller-file": "^2.0.1",
                "require-directory": "^2.1.1",
                "require-main-filename": "^2.0.0",
                "set-blocking": "^2.0.0",
                "string-width": "^4.2.0",
                "which-module": "^2.0.0",
                "y18n": "^4.0.0",
                "yargs-parser": "^18.1.2"
            }
        },
        "yargs-parser": {
            "version": "18.1.3",
            "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-18.1.3.tgz",
            "integrity": "sha512-o50j0JeToy/4K6OZcaQmW6lyXXKhq7csREXcDwk2omFPJEwUNOVtJKvmDr9EI1fAJZUyZcRF7kxGBWmRXudrCQ==",
            "requires": {
                "camelcase": "^5.0.0",
                "decamelize": "^1.2.0"
            }
        }
    }
}