const comprehensiveWebDevGuide = {
  semanticTags: {
    header: {
      definition: {
        name: "header 요소",
        description: "문서나 섹션의 머리말을 나타내는 컨테이너 요소",
        purpose: "도입부나 네비게이션 링크 모음을 담는 영역",
        usageContext: "문서나 <article>, <section> 등의 하위 섹션의 헤더로 사용"
      },
      characteristics: {
        displayType: "블록 레벨 요소",
        allowedParents: ["body", "article", "section", "main", "aside"],
        allowedChildren: ["h1-h6", "nav", "div", "p", "img"],
        implicitRole: "banner (문서 최상위 header인 경우)"
      },
      bestPractices: {
        recommendations: {
          usage: "페이지당 하나의 주요 header 사용",
          structure: "명확한 계층 구조 유지",
          content: "로고, 제목, 네비게이션 등 포함"
        },
        avoidance: {
          nested: "header 내부에 다른 header 중첩 피하기",
          footerInside: "footer 내부에 header 배치 금지",
          overloading: "과도한 콘텐츠 포함 지양"
        }
      },
      accessibility: {
        requirements: {
          structure: "논리적인 헤딩 구조 사용",
          landmarks: "주요 랜드마크로 활용",
          navigation: "키보드 탐색 지원"
        },
        ariaRoles: {
          banner: "주요 헤더의 역할",
          navigation: "내비게이션 영역의 역할"
        }
      }
    },
    nav: {
      definition: {
        name: "nav 요소",
        description: "주요 네비게이션 링크 모음을 나타내는 요소",
        purpose: "웹사이트의 주요 탐색 섹션 정의",
        usageContext: "메인 메뉴, 사이드 메뉴, 페이지 내 목차 등"
      },
      characteristics: {
        displayType: "블록 레벨 요소",
        allowedParents: ["body", "header", "footer", "aside", "article"],
        allowedChildren: ["ul", "ol", "div", "a"],
        implicitRole: "navigation"
      },
      bestPractices: {
        recommendations: {
          structure: "목록 요소(ul/li) 활용",
          organization: "논리적 그룹화와 계층 구조",
          labeling: "목적을 명확히 하는 레이블 사용"
        },
        avoidance: {
          overuse: "모든 링크 그룹에 nav 사용 자제",
          nesting: "과도한 중첩 구조 피하기"
        }
      }
    },
    main: {
      definition: {
        name: "main 요소",
        description: "문서의 주요 콘텐츠를 포함하는 영역",
        purpose: "페이지의 핵심 내용 표시",
        usageContext: "문서당 하나만 사용 가능"
      },
      characteristics: {
        displayType: "블록 레벨 요소",
        allowedParents: ["body"],
        allowedChildren: ["article", "section", "div", "p"],
        implicitRole: "main"
      },
      bestPractices: {
        recommendations: {
          uniqueness: "페이지당 하나만 사용",
          visibility: "항상 표시 가능한 상태 유지",
          content: "주요 콘텐츠만 포함"
        }
      }
    },
    article: {
      definition: {
        name: "article 요소",
        description: "독립적으로 배포 가능한 자체 완결적 콘텐츠",
        purpose: "블로그 포스트, 뉴스 기사, 댓글 등 표현",
        usageContext: "독립적인 콘텐츠 단위로 사용"
      },
      characteristics: {
        displayType: "블록 레벨 요소",
        allowedParents: ["main", "section", "aside"],
        allowedChildren: ["header", "footer", "section", "h1-h6"],
        implicitRole: "article"
      },
      bestPractices: {
        recommendations: {
          structure: "헤더와 푸터 포함 권장",
          nesting: "필요한 경우 중첩 가능",
          identification: "제목 요소 필수 포함"
        }
      }
    },
    section: {
      definition: {
        name: "section 요소",
        description: "관련된 콘텐츠의 주제별 그룹화",
        purpose: "문서의 콘텐츠를 논리적으로 구분",
        usageContext: "장, 절, 탭 패널 등의 구분"
      },
      characteristics: {
        displayType: "블록 레벨 요소",
        allowedParents: ["body", "article", "main", "aside"],
        allowedChildren: ["h1-h6", "article", "div", "p"],
        implicitRole: "region (aria-label 있는 경우)"
      }
    },
    aside: {
      definition: {
        name: "aside 요소",
        description: "문서의 주요 내용과 간접적으로 연관된 부가 콘텐츠",
        purpose: "사이드바, 광고, 관련 링크 등 표시",
        usageContext: "보조적인 콘텐츠 영역으로 사용"
      },
      characteristics: {
        displayType: "블록 레벨 요소",
        allowedParents: ["body", "main", "article"],
        allowedChildren: ["div", "nav", "section"],
        implicitRole: "complementary"
      }
    },
    footer: {
      definition: {
        name: "footer 요소",
        description: "문서나 섹션의 푸터 영역",
        purpose: "저작권, 연락처, 관련 문서 등 포함",
        usageContext: "문서나 섹션의 마무리 정보 표시"
      },
      characteristics: {
        displayType: "블록 레벨 요소",
        allowedParents: ["body", "article", "section"],
        allowedChildren: ["div", "p", "nav"],
        implicitRole: "contentinfo (문서 최상위 footer인 경우)"
      }
    },
    commonAttributes: {
      global: {
        id: "요소의 고유 식별자",
        class: "스타일링을 위한 클래스명",
        lang: "요소의 언어 설정",
        title: "요소에 대한 추가 정보"
      },
      accessibility: {
        role: "요소의 역할 정의",
        ariaLabel: "요소의 레이블 정의",
        ariaDescribedby: "상세 설명 요소와 연결",
        tabindex: "키보드 탐색 순서 설정"
      }
    }
  },
  
  cssLayout: {
    boxModel: {
      definition: {
        concept: "모든 HTML 요소를 감싸는 박스 형태의 모델",
        importance: "웹 페이지의 요소 배치와 크기 계산의 기본이 되는 개념",
        visualRepresentation: "요소를 둘러싼 여러 레이어의 박스 구조"
      },
      components: {
        margin: {
          definition: "요소 주변의 외부 여백",
          properties: {
            marginTop: "위쪽 외부 여백",
            marginRight: "오른쪽 외부 여백",
            marginBottom: "아래쪽 외부 여백",
            marginLeft: "왼쪽 외부 여백"
          },
          shorthandSyntax: {
            oneValue: {
              syntax: "margin: 10px",
              explanation: "모든 면에 동일한 여백 적용"
            },
            twoValues: {
              syntax: "margin: 10px 20px",
              explanation: "세로(top/bottom) 가로(left/right) 여백 지정"
            },
            threeValues: {
              syntax: "margin: 10px 20px 30px",
              explanation: "top, left/right, bottom 순서로 지정"
            },
            fourValues: {
              syntax: "margin: 10px 20px 30px 40px",
              explanation: "시계 방향(top, right, bottom, left)으로 지정"
            }
          },
          specialValues: {
            auto: {
              usage: "수평 중앙 정렬에 사용",
              example: "margin: 0 auto"
            },
            negative: {
              usage: "요소를 지정된 방향으로 이동",
              caution: "의도하지 않은 레이아웃 깨짐 주의"
            }
          }
        },
        border: {
          definition: "요소의 테두리",
          properties: {
            width: {
              values: ["thin", "medium", "thick"],
              units: ["px", "em", "rem"],
              default: "medium"
            },
            style: {
              values: {
                solid: "실선",
                dotted: "점선",
                dashed: "파선",
                double: "이중선",
                groove: "홈이 파인 효과",
                ridge: "솟은 효과",
                inset: "요소가 들어간 효과",
                outset: "요소가 튀어나온 효과"
              },
              default: "none"
            },
            color: {
              formats: {
                keyword: "red, blue 등의 색상명",
                hex: "#FF0000",
                rgb: "rgb(255, 0, 0)",
                rgba: "rgba(255, 0, 0, 0.5)"
              },
              default: "currentColor"
            }
          },
          shorthand: {
            syntax: "border: width style color",
            example: "border: 1px solid black"
          }
        },
        padding: {
          definition: "내용과 테두리 사이의 여백",
          properties: {
            paddingTop: "위쪽 내부 여백",
            paddingRight: "오른쪽 내부 여백",
            paddingBottom: "아래쪽 내부 여백",
            paddingLeft: "왼쪽 내부 여백"
          },
          characteristics: {
            behavior: "배경색이나 배경 이미지가 적용되는 영역",
            restrictions: "음수 값 사용 불가",
            inheritance: "부모 요소의 너비에 따라 백분율 계산"
          }
        },
        content: {
          definition: "요소의 실제 내용이 표시되는 영역",
          dimensions: {
            width: "내용 영역의 너비",
            height: "내용 영역의 높이"
          }
        }
      },
      sizeCalculation: {
        totalWidth: {
          formula: "width + paddingLeft + paddingRight + borderLeft + borderRight + marginLeft + marginRight",
          example: "content(200px) + padding(20px×2) + border(1px×2) + margin(15px×2) = 272px"
        },
        totalHeight: {
          formula: "height + paddingTop + paddingBottom + borderTop + borderBottom + marginTop + marginBottom",
          example: "content(100px) + padding(10px×2) + border(1px×2) + margin(15px×2) = 152px"
        }
      },
      boxSizing: {
        contentBox: {
          description: "기본값, width/height가 content 영역만 지정",
          behavior: "padding과 border가 지정된 width/height에 추가됨"
        },
        borderBox: {
          description: "width/height가 padding과 border를 포함",
          benefit: "직관적인 크기 지정 가능",
          usage: "* { box-sizing: border-box; } 로 전역 설정 권장"
        }
      }
    },
    flexbox: {
      definition: {
        concept: "1차원 레이아웃 시스템",
        purpose: "요소들을 행이나 열 방향으로 유연하게 배치",
        mainConcepts: ["flex container", "flex items", "main axis", "cross axis"]
      },
      container: {
        activation: {
          property: "display",
          values: {
            flex: "블록 레벨 flex container",
            inlineFlex: "인라인 레벨 flex container"
          }
        },
        properties: {
          flexDirection: {
            values: {
              row: "좌에서 우로 (기본값)",
              rowReverse: "우에서 좌로",
              column: "위에서 아래로",
              columnReverse: "아래에서 위로"
            },
            affect: "주축의 방향 설정"
          },
          flexWrap: {
            values: {
              nowrap: "줄바꿈 없음 (기본값)",
              wrap: "필요시 줄바꿈",
              wrapReverse: "역순으로 줄바꿈"
            },
            usage: "컨테이너 너비 초과 시 동작 지정"
          },
          justifyContent: {
            values: {
              flexStart: "시작점 정렬",
              flexEnd: "끝점 정렬",
              center: "중앙 정렬",
              spaceBetween: "양끝 정렬, 아이템 간격 균등",
              spaceAround: "아이템 주변 여백 균등",
              spaceEvenly: "모든 여백 균등"
            },
            axis: "주축 방향 정렬"
          },
          alignItems: {
            values: {
              stretch: "교차축으로 늘림 (기본값)",
              flexStart: "시작점 정렬",
              flexEnd: "끝점 정렬",
              center: "중앙 정렬",
              baseline: "텍스트 기준선 정렬"
            },
            axis: "교차축 방향 정렬"
          }
        }
      },
      items: {
        properties: {
          flex: {
            components: {
              flexGrow: {
                description: "남은 공간 분배 비율",
                defaultValue: "0",
                behavior: "양수값에 따라 확장"
              },
              flexShrink: {
                description: "공간 부족시 축소 비율",
                defaultValue: "1",
                behavior: "양수값에 따라 축소"
              },
              flexBasis: {
                description: "항목의 기본 크기",
                defaultValue: "auto",
                values: ["auto", "content", "length units"]
              }
            },
            shorthand: {
              syntax: "flex: grow shrink basis",
              commonValues: {
                initial: "flex: 0 1 auto",
                auto: "flex: 1 1 auto",
                none: "flex: 0 0 auto"
              }
            }
          },
          alignSelf: {
            description: "개별 항목의 교차축 정렬",
            values: {
              auto: "부모의 alignItems 값 상속",
              flexStart: "시작점 정렬",
              flexEnd: "끝점 정렬",
              center: "중앙 정렬",
              stretch: "늘림",
              baseline: "기준선 정렬"
            }
          },
          order: {
            description: "항목의 순서 지정",
            defaultValue: "0",
            usage: "값이 작을수록 먼저 배치"
          }
        }
      }
    },
    grid: {
      definition: {
        concept: "2차원 레이아웃 시스템",
        purpose: "행과 열을 기반으로 한 복잡한 레이아웃 구성",
        mainConcepts: ["grid container", "grid items", "grid lines", "grid tracks", "grid areas"]
      },
      container: {
        activation: {
          property: "display",
          values: {
            grid: "블록 레벨 grid container",
            inlineGrid: "인라인 레벨 grid container"
          }
        },
        properties: {
          gridTemplate: {
            columns: {
              property: "grid-template-columns",
              commonValues: {
                fixedUnits: "px, em, rem 등 고정 단위",
                fractions: "fr 단위로 비율 지정",
                percentages: "백분율로 지정",
                auto: "내용물 크기에 맞춤"
              },
              functions: {
                repeat: {
                  syntax: "repeat(count, value)",
                  example: "repeat(3, 1fr)",
                  usage: "동일한 값을 반복 지정"
                },
                minmax: {
                  syntax: "minmax(min, max)",
                  example: "minmax(100px, auto)",
                  usage: "최소/최대 크기 범위 지정"
                }
              }
            },
            rows: {
              property: "grid-template-rows",
              usage: "columns와 동일한 값과 함수 사용"
            },
            areas: {
              property: "grid-template-areas",
              syntax: `
                grid-template-areas:
                  "header header header"
                  "nav main aside"
                  "footer footer footer"
              `,
              rules: {
                naming: "영문자로 시작, 공백으로 셀 구분",
                empty: "마침표(.)로 빈 셀 표시",
                rectangular: "직사각형 형태 유지 필수"
              }
            }
          },
          gap: {
            rowGap: "행 간격 지정",
            columnGap: "열 간격 지정",
            shorthand: {
              syntax: "gap: row-gap column-gap",
              example: "gap: 20px 10px"
            }
          },
          alignment: {
            justifyItems: {
              description: "모든 grid items의 수평 정렬",
              values: ["start", "end", "center", "stretch"]
            },
            alignItems: {
              description: "모든 grid items의 수직 정렬",
              values: ["start", "end", "center", "stretch"]
            },
            placeItems: {
              description: "justify-items와 align-items의 단축 속성",
              syntax: "place-items: <align-items> <justify-items>"
            }
          }
        }
      },
      items: {
        properties: {
          gridColumn: {
            start: "시작 라인 번호 또는 이름",
            end: "끝 라인 번호 또는 이름",
            shorthand: {
              syntax: "grid-column: start / end",
              example: "grid-column: 1 / 3"
            },
            span: {
              syntax: "grid-column: span <number>",
              example: "grid-column: span 2"
            }
          },
          gridRow: {
            definition: "gridColumn과 동일한 구조",
            start: "시작 라인 번호 또는 이름",
            end: "끝 라인 번호 또는 이름",
            shorthand: {
              syntax: "grid-row: start / end",
              example: "grid-row: 1 / 3"
            },
            span: {
              syntax: "grid-row: span <number>",
              example: "grid-row: span 2"
            }
          },
          gridArea: {
            description: "grid-template-areas에 정의된 영역 이름 지정",
            syntax: "grid-area: <name>",
            example: "grid-area: header"
          },
          justifySelf: {
            description: "개별 item의 수평 정렬",
            values: ["start", "end", "center", "stretch"]
          },
          alignSelf: {
            description: "개별 item의 수직 정렬",
            values: ["start", "end", "center", "stretch"]
          }
        }
      },
      autoPlacement: {
        gridAutoFlow: {
          values: {
            row: "행 우선 배치 (기본값)",
            column: "열 우선 배치",
            dense: "빈 공간 채우기 시도"
          }
        },
        gridAutoRows: "자동 생성되는 행의 크기",
        gridAutoColumns: "자동 생성되는 열의 크기"
      }
    },
    positioning: {
      definition: {
        concept: "요소의 위치 지정 방식",
        properties: ["position", "top", "right", "bottom", "left", "z-index"]
      },
      positionValues: {
        static: {
          description: "기본값, 일반적인 문서 흐름",
          characteristics: {
            offset: "위치 조정 속성 영향 없음",
            zIndex: "적용되지 않음"
          }
        },
        relative: {
          description: "일반 위치를 기준으로 상대적 배치",
          characteristics: {
            flow: "문서 흐름 유지",
            space: "원래 위치 공간 유지",
            context: "자식 요소의 절대 위치 기준점"
          },
          usage: {
            offsetParent: "자신의 원래 위치 기준",
            childAbsolute: "absolute 자식의 기준점으로 활용"
          }
        },
        absolute: {
          description: "위치가 지정된 조상 요소 기준 배치",
          characteristics: {
            flow: "문서 흐름에서 제거",
            space: "원래 위치 공간 제거",
            context: "position이 static이 아닌 가장 가까운 조상 기준"
          },
          usage: {
            modal: "팝업이나 모달 윈도우",
            tooltip: "툴팁이나 말풍선",
            dropdown: "드롭다운 메뉴"
          }
        },
        fixed: {
          description: "뷰포트 기준 고정 배치",
          characteristics: {
            flow: "문서 흐름에서 제거",
            scroll: "스크롤 시에도 위치 고정",
            context: "뷰포트 기준"
          },
          usage: {
            header: "고정 헤더",
            navigation: "고정 내비게이션",
            banner: "고정 배너"
          }
        },
        sticky: {
          description: "스크롤 위치에 따라 상대적/고정 배치",
          characteristics: {
            flow: "일반 흐름 유지하다가 임계점에서 고정",
            threshold: "지정된 임계점까지 도달 시 고정",
            parent: "부모 요소 범위 내에서만 동작"
          },
          usage: {
            tableHeader: "테이블 헤더 고정",
            sectionHeader: "섹션 제목 고정",
            navigation: "스크롤 시 고정되는 내비게이션"
          }
        }
      },
      offsetProperties: {
        top: {
          description: "위쪽에서의 거리",
          values: ["auto", "length", "percentage"]
        },
        right: {
          description: "오른쪽에서의 거리",
          values: ["auto", "length", "percentage"]
        },
        bottom: {
          description: "아래쪽에서의 거리",
          values: ["auto", "length", "percentage"]
        },
        left: {
          description: "왼쪽에서의 거리",
          values: ["auto", "length", "percentage"]
        }
      },
      zIndex: {
        description: "요소의 쌓임 순서 지정",
        characteristics: {
          context: "쌓임 맥락 내에서만 적용",
          values: {
            auto: "부모와 동일한 순서 (0)",
            integers: "양수/음수 정수 값"
          }
        },
        stackingContext: {
          creators: [
            "root element",
            "position: absolute/relative with z-index",
            "position: fixed/sticky",
            "opacity < 1",
            "transform",
            "filter"
          ],
          behavior: "새로운 쌓임 맥락 내에서 자식 요소들의 z-index 재정의"
        }
      },
      bestPractices: {
        planning: "레이아웃 계획 시 포지셔닝 고려",
        maintenance: "복잡한 포지셔닝은 유지보수 어려움 주의",
        accessibility: "키보드 탐색 고려",
        responsive: "반응형 디자인에서의 포지셔닝 처리"
      }
    }
  },
  
  webBrowserAndResponsive: {
    browserRendering: {
      definition: {
        concept: "웹 브라우저가 HTML, CSS, JavaScript를 해석하여 화면에 표시하는 과정",
        importance: "성능 최적화와 사용자 경험 향상을 위한 핵심 이해 요소",
        renderingProcess: {
          parsing: {
            html: "HTML 문서를 파싱하여 DOM 트리 생성",
            css: "CSS를 파싱하여 CSSOM 트리 생성",
            combination: "DOM과 CSSOM을 결합하여 렌더 트리 생성"
          },
          layout: "각 요소의 크기와 위치 계산",
          paint: "픽셀을 화면에 그리는 과정",
          composite: "레이어를 결합하는 최종 단계"
        }
      },
      criticalRenderingPath: {
        definition: "브라우저가 HTML을 화면에 렌더링하는 핵심 단계",
        steps: {
          domConstruction: {
            process: "HTML → 토큰 → 노드 → DOM 트리",
            timeFactors: {
              documentSize: "HTML 문서의 크기",
              tagComplexity: "태그의 중첩 정도",
              parseErrors: "문법 오류 처리 시간"
            },
            optimization: {
              minifyHTML: "HTML 최소화",
              removeComments: "불필요한 주석 제거",
              deferParsing: "파싱 지연 로딩"
            }
          },
          cssProcessing: {
            process: "CSS → 토큰 → 노드 → CSSOM 트리",
            blockers: {
              stylesheets: "외부 스타일시트 로딩",
              complexSelectors: "복잡한 선택자 처리",
              cascading: "스타일 상속과 계단식 처리"
            },
            optimization: {
              minifyCSS: "CSS 최소화",
              removeDuplicates: "중복 규칙 제거",
              simplifySelectors: "선택자 단순화"
            }
          },
          renderTreeConstruction: {
            process: "DOM + CSSOM → 렌더 트리",
            considerations: {
              visibility: "display: none 요소 제외",
              dynamicChanges: "JavaScript에 의한 변경 처리",
              pseudoElements: "가상 요소 처리"
            }
          },
          layoutProcess: {
            definition: "각 요소의 정확한 위치와 크기 계산",
            triggers: {
              initialLoad: "페이지 최초 로드",
              resize: "창 크기 변경",
              domChanges: "DOM 구조 변경",
              styleChanges: "스타일 변경"
            },
            reflow: {
              causes: {
                dimensionChanges: "크기/위치 변경",
                fontChanges: "폰트 변경",
                imageLoading: "이미지 로딩"
              },
              prevention: {
                batchUpdates: "일괄 업데이트 처리",
                avoidInlineStyles: "인라인 스타일 지양",
                useTransform: "transform 활용"
              }
            }
          },
          paintProcess: {
            definition: "픽셀을 화면에 그리는 과정",
            layers: {
              background: "배경 레이어",
              content: "콘텐츠 레이어",
              overlay: "오버레이 레이어"
            },
            optimization: {
              gpuAcceleration: "GPU 가속 활용",
              reducePaintAreas: "페인트 영역 최소화",
              useCompositing: "합성 레이어 활용"
            }
          }
        }
      },
      performance: {
        metrics: {
          FCP: "First Contentful Paint",
          LCP: "Largest Contentful Paint",
          FID: "First Input Delay",
          CLS: "Cumulative Layout Shift"
        },
        optimization: {
          resourcePrioritization: {
            critical: "주요 리소스 우선 로딩",
            async: "비동기 로딩 활용",
            lazy: "지연 로딩 구현"
          },
          codeOptimization: {
            minification: "코드 최소화",
            compression: "압축 전송",
            caching: "캐시 활용"
          }
        }
      }
    },
    browserEngines: {
      types: {
        blink: {
          description: "Chrome과 Edge에서 사용하는 렌더링 엔진",
          features: ["빠른 JavaScript 처리", "효율적인 메모리 관리"],
          optimization: ["V8 엔진 최적화", "메모리 사용 최적화"]
        },
        webkit: {
          description: "Safari에서 사용하는 렌더링 엔진",
          features: ["효율적인 모바일 렌더링", "배터리 효율성"],
          optimization: ["하드웨어 가속", "전력 소비 최적화"]
        },
        gecko: {
          description: "Firefox에서 사용하는 렌더링 엔진",
          features: ["높은 웹 표준 준수", "강력한 개인정보 보호"],
          optimization: ["SpiderMonkey 최적화", "메모리 관리"]
        }
      },
      compatibility: {
        issues: ["엔진별 렌더링 차이", "CSS 속성 접두사", "JavaScript API 지원"],
        solutions: ["폴리필 사용", "벤더 프리픽스 활용", "기능 감지"]
      }
    },
    responsiveDesign: {
      fundamentals: {
        definition: {
          concept: "다양한 디바이스와 화면 크기에 맞춰 최적화된 레이아웃 제공",
          principles: {
            fluidGrids: "유동적 그리드 시스템",
            flexibleImages: "유연한 이미지 처리",
            mediaQueries: "미디어 쿼리 활용"
          }
        },
        viewportConcepts: {
          definition: "화면에서 웹페이지가 표시되는 영역",
          metaTag: {
            syntax: '<meta name="viewport" content="width=device-width, initial-scale=1">',
            properties: {
              width: "뷰포트 너비 설정",
              initialScale: "초기 화면 배율",
              minimumScale: "최소 화면 배율",
              maximumScale: "최대 화면 배율",
              userScalable: "사용자 확대/축소 허용 여부"
            }
          },
          units: {
            viewport: {
              vw: "뷰포트 너비의 1%",
              vh: "뷰포트 높이의 1%",
              vmin: "뷰포트의 작은 치수의 1%",
              vmax: "뷰포트의 큰 치수의 1%"
            },
            relative: {
              em: "현재 폰트 크기 기준",
              rem: "루트 요소 폰트 크기 기준",
              percentages: "부모 요소 기준 백분율"
            }
          }
        }
      },
      layoutStrategies: {
        fluidGrids: {
          concept: "유동적으로 변하는 그리드 시스템",
          implementation: {
            calculations: "타겟 / 콘텍스트 = 결과",
            example: "target: 960px / context: 1200px = 80%"
          },
          frameworks: {
            bootstrap: {
              columns: "12컬럼 시스템",
              breakpoints: ["xs", "sm", "md", "lg", "xl"]
            },
            tailwind: {
              utility: "유틸리티 기반 클래스",
              customization: "설정 파일을 통한 커스터마이징"
            }
          }
        },
        flexibleImages: {
          techniques: {
            maxWidth: {
              css: "max-width: 100%",
              usage: "컨테이너에 맞춰 이미지 크기 조절"
            },
            pictureSrcset: {
              description: "다양한 해상도 지원",
              example: `
                <picture>
                  <source media="(min-width: 800px)" srcset="large.jpg">
                  <source media="(min-width: 400px)" srcset="medium.jpg">
                  <img src="small.jpg" alt="responsive image">
                </picture>
              `
            },
            objectFit: {
              properties: ["contain", "cover", "fill", "scale-down"],
              usage: "이미지 비율 유지 및 조절"
            }
          },
          optimization: {
            lazyLoading: "필요할 때 이미지 로딩",
            compressionTechniques: "이미지 최적화 기법",
            modernFormats: ["WebP", "AVIF"]
          }
        },
        mediaQueries: {
          syntax: {
            basic: "@media screen and (min-width: 768px) { ... }",
            complex: "@media (min-width: 768px) and (max-width: 1024px) { ... }"
          },
          breakpoints: {
            common: {
              mobile: "320px - 480px",
              tablet: "481px - 768px",
              laptop: "769px - 1024px",
              desktop: "1025px 이상"
            },
            considerations: {
              deviceTypes: "일반적인 디바이스 크기",
              contentTypes: "콘텐츠 특성",
              userBehavior: "사용자 행동 패턴"
            }
          },
          features: {
            width: "화면 너비",
            height: "화면 높이",
            orientation: "기기 방향",
            resolution: "화면 해상도",
            aspectRatio: "화면 비율",
            colorScheme: "색상 스키마"
          }
        }
      },
      responsivePatterns: {
        layouts: {
          mostlyFluid: {
            description: "유동적 다단 레이아웃",
            characteristics: ["중첩 컬럼", "브레이크포인트에서 재배치"]
          },
          columnDrop: {
            description: "화면 축소시 열 수직 스택",
            characteristics: ["단순한 구현", "명확한 콘텐츠 구조"]
          },
          layoutShifter: {
            description: "주요 브레이크포인트에서 레이아웃 변경",
            characteristics: ["큰 폭의 디자인 변화", "복잡한 구현"]
          },
          tinyTweaks: {
            description: "작은 폭의 디자인 조정",
            characteristics: ["폰트 크기 조정", "여백 조정"]
          },
          offCanvas: {
            description: "보조 콘텐츠 숨김 처리",
            characteristics: ["모바일 내비게이션", "사이드 패널"]
          }
        },
        components: {
          navigation: {
            patterns: {
              hamburger: "모바일용 햄버거 메뉴",
              dropdown: "드롭다운 메뉴",
              breadcrumb: "경로 표시",
              tabs: "탭 메뉴"
            },
            implementation: {
              html: "시맨틱 마크업",
              css: "반응형 스타일링",
              javascript: "인터랙션 구현"
            }
          },
          tables: {
            patterns: {
              horizontal: "수평 스크롤",
              stackedRows: "행 스택",
              noMoreTables: "카드형 변환"
            }
          },
          forms: {
            patterns: {
              stackedLabels: "레이블 상단 배치",
              inlineToStacked: "인라인에서 스택형으로 변환",
              responsiveInputs: "입력 필드 크기 조정"
            }
          }
        }
      },
      accessibility: {
        considerations: {
          touchTargets: {
            size: "최소 44x44 픽셀",
            spacing: "적절한 간격 유지"
          },
          fontSizing: {
            minimum: "최소 16px 기준",
            scaling: "상대적 단위 사용"
          },
          contrast: "충분한 색상 대비",
          keyboardNavigation: "키보드 접근성 보장"
        },
        testing: {
          tools: ["Chrome DevTools", "Accessibility Insights", "WAVE"],
          methods: ["다양한 디바이스 테스트", "스크린리더 테스트"]
        }
      },
      performance: {
        optimization: {
          resources: {
            images: ["최적화된 포맷", "적절한 크기", "지연 로딩"],
            css: ["중요 CSS 인라인화", "미디어 쿼리 최적화"],
            javascript: ["코드 분할", "지연 로딩"]
          },
          techniques: {
            caching: "적절한 캐시 전략",
            compression: "리소스 압축",
            cdn: "콘텐츠 전송 네트워크 활용"
          }
        },
        monitoring: {
          metrics: ["로딩 시간", "인터랙티브 시간", "레이아웃 이동"],
          tools: ["Lighthouse", "WebPageTest", "Performance API"]
        }
      }
    }
  },
  
  DOMOffsetProperties: {
    elementDimensions: {
      offsetWidth: {
        definition: "요소의 전체 너비를 픽셀 단위로 반환하는 읽기 전용 속성",
        calculation: {
          components: {
            width: "요소의 CSS width",
            padding: "좌우 패딩 값",
            border: "좌우 테두리 두께",
            scrollbar: "수직 스크롤바가 있는 경우 해당 너비"
          },
          formula: "width + paddingLeft + paddingRight + borderLeft + borderRight + scrollbarWidth",
          example: {
            css: `
              .element {
                width: 100px;
                padding: 10px;
                border: 1px solid black;
              }
            `,
            calculation: "100 + (10 × 2) + (1 × 2) = 122px"
          }
        },
        characteristics: {
          rounding: "정수로 반올림됨",
          updates: "레이아웃 변경 시 자동 업데이트",
          performance: "레이아웃 리플로우 발생 가능"
        }
      },
      offsetHeight: {
        definition: "요소의 전체 높이를 픽셀 단위로 반환하는 읽기 전용 속성",
        calculation: {
          components: {
            height: "요소의 CSS height",
            padding: "상하 패딩 값",
            border: "상하 테두리 두께",
            scrollbar: "수평 스크롤바가 있는 경우 해당 높이"
          },
          formula: "height + paddingTop + paddingBottom + borderTop + borderBottom + scrollbarHeight",
          example: {
            css: `
              .element {
                height: 100px;
                padding: 10px;
                border: 1px solid black;
              }
            `,
            calculation: "100 + (10 × 2) + (1 × 2) = 122px"
          }
        },
        characteristics: {
          visibility: "display: none인 경우 0 반환",
          collapse: "visibility: collapse인 경우 0 반환",
          hidden: "요소가 숨겨진 경우에도 실제 크기 반환"
        }
      }
    },
    positionProperties: {
      offsetLeft: {
        definition: "요소의 좌측 외부 경계와 offsetParent의 좌측 내부 경계 사이의 거리",
        considerations: {
          offsetParent: {
            definition: "가장 가까운 위치 지정된 조상 요소",
            positioning: ["relative", "absolute", "fixed"],
            fallback: "body 요소",
            special: "td, th, table은 offsetParent가 될 수 있음"
          },
          calculation: {
            margin: "마진은 포함되지 않음",
            positioning: "위치 지정 방식에 따라 값이 달라짐",
            scrolling: "스크롤 위치에 영향받지 않음"
          },
          examples: {
            static: "일반 배치 흐름에서의 위치",
            relative: "상대 위치 지정 시의 오프셋",
            absolute: "절대 위치 지정 시의 오프셋"
          }
        }
      },
      offsetTop: {
        definition: "요소의 상단 외부 경계와 offsetParent의 상단 내부 경계 사이의 거리",
        considerations: {
          measurement: {
            reference: "offsetParent 기준 측정",
            units: "픽셀 단위 반환",
            rounding: "정수로 반올림"
          },
          behaviors: {
            scrolling: "페이지 스크롤에 영향받지 않음",
            transforms: "CSS 변환의 영향을 받음",
            positioning: "위치 지정 방식에 따른 변화"
          }
        }
      }
    },
    scrollProperties: {
      scrollWidth: {
        definition: "요소의 전체 스크롤 가능 너비",
        characteristics: {
          overflow: "내용이 넘치는 경우 실제 콘텐츠 너비 포함",
          padding: "패딩 포함",
          border: "테두리 제외",
          calculation: "보이는 영역 + 넘치는 영역"
        }
      },
      scrollHeight: {
        definition: "요소의 전체 스크롤 가능 높이",
        usage: {
          pageHeight: "문서 전체 높이 확인",
          contentSize: "실제 콘텐츠 크기 측정",
          scrollProgress: "스크롤 진행률 계산"
        }
      },
      scrollLeft: {
        definition: "요소의 수평 스크롤 위치",
        characteristics: {
          readable: "현재 스크롤 위치 읽기 가능",
          writable: "스크롤 위치 설정 가능",
          rtl: "RTL 언어에서의 동작 차이"
        }
      },
      scrollTop: {
        definition: "요소의 수직 스크롤 위치",
        applications: {
          scrollTracking: "스크롤 위치 추적",
          smoothScroll: "부드러운 스크롤 구현",
          infiniteScroll: "무한 스크롤 구현"
        }
      }
    },
    clientProperties: {
      clientWidth: {
        definition: "요소의 내부 너비 (패딩 포함, 테두리/스크롤바 제외)",
        calculation: {
          components: ["CSS width", "padding"],
          excludes: ["border", "scrollbar", "margin"]
        }
      },
      clientHeight: {
        definition: "요소의 내부 높이 (패딩 포함, 테두리/스크롤바 제외)",
        usage: {
          viewportSize: "뷰포트 크기 측정",
          contentArea: "콘텐츠 영역 크기 계산",
          layoutCalculations: "레이아웃 계산"
        }
      }
    },
    practicalApplications: {
      elementPositioning: {
        absolutePosition: {
          calculation: {
            method: "offsetLeft/Top 값의 재귀적 합산",
            considerations: ["스크롤 위치", "변환", "뷰포트 위치"]
          },
          example: {
            code: `
              function getAbsolutePosition(element) {
                let left = 0, top = 0;
                while(element) {
                  left += element.offsetLeft - element.scrollLeft;
                  top += element.offsetTop - element.scrollTop;
                  element = element.offsetParent;
                }
                return { left, top };
              }
            `,
            usage: "요소의 절대 위치 계산"
          }
        },
        viewportPosition: {
          calculation: {
            method: "getBoundingClientRect() 사용",
            properties: ["top", "right", "bottom", "left"],
            considerations: ["스크롤 위치", "변환"]
          }
        }
      },
      scrollHandling: {
        infiniteScroll: {
          implementation: {
            detection: "scrollHeight - scrollTop === clientHeight",
            threshold: "로딩 시작 임계값 설정",
            optimization: "스로틀링/디바운싱 적용"
          }
        },
        scrollProgress: {
          calculation: {
            formula: "(scrollTop / (scrollHeight - clientHeight)) * 100",
            usage: "스크롤 진행률 표시"
          }
        }
      },
      elementResizing: {
        dimensions: {
          calculation: {
            width: "offsetWidth vs clientWidth 선택",
            height: "offsetHeight vs clientHeight 선택"
          },
          considerations: {
            boxSizing: "box-sizing 속성의 영향",
            scrollbars: "스크롤바 존재 여부",
            borders: "테두리 두께"
          }
        }
      },
      performanceOptimization: {
        layoutThrashing: {
          problem: "잦은 레이아웃 계산으로 인한 성능 저하",
          solutions: {
            batchReading: "오프셋 값 읽기 일괄 처리",
            caching: "계산된 값 캐싱",
            requestAnimationFrame: "레이아웃 계산 최적화"
          }
        },
        bestPractices: {
          measurement: "필요한 경우에만 오프셋 값 측정",
          caching: "자주 사용되는 값 저장",
          alternatives: "가능한 경우 getBoundingClientRect() 사용"
        }
      }
    },
    crossBrowserConsiderations: {
      implementations: {
        differences: {
          rounding: "브라우저별 반올림 처리 차이",
          scrollbar: "스크롤바 처리 방식 차이",
          rtl: "RTL 텍스트 방향에서의 차이"
        },
        solutions: {
          normalization: "값 정규화 함수 사용",
          feature: "기능 감지 및 대체 구현",
          testing: "크로스 브라우저 테스트"
        }
      }
    }
  },
  
  DOMElementMethods: {
    elementCreation: {
      createElement: {
        description: "새로운 HTML 요소를 생성하는 메서드",
        syntax: "document.createElement(tagName[, options])",
        parameters: {
          tagName: {
            type: "문자열",
            description: "생성할 HTML 요소의 태그 이름",
            examples: ["div", "p", "span", "button"]
          },
          options: {
            type: "객체",
            properties: {
              is: "커스텀 엘리먼트 정의",
              customElements: "웹 컴포넌트 관련 설정"
            }
          }
        },
        usage: {
          basic: {
            code: `const divElement = document.createElement('div');`,
            explanation: "기본적인 div 요소 생성"
          },
          advanced: {
            code: `
              const customButton = document.createElement('button', {
                is: 'custom-button'
              });
            `,
            explanation: "커스텀 엘리먼트로 버튼 생성"
          }
        },
        bestPractices: {
          performance: {
            documentFragment: "여러 요소 생성 시 DocumentFragment 사용",
            batchCreation: "반복문 내 createElement 최소화"
          },
          validation: "올바른 태그 이름 사용 확인",
          compatibility: "브라우저 지원 범위 확인"
        }
      },
      createTextNode: {
        description: "텍스트 노드를 생성하는 메서드",
        syntax: "document.createTextNode(data)",
        usage: {
          basic: `const text = document.createTextNode('Hello World');`,
          withElement: `
            const div = document.createElement('div');
            const text = document.createTextNode('Hello World');
            div.appendChild(text);
          `
        },
        considerations: {
          escaping: "HTML 특수문자 자동 이스케이프",
          whitespace: "공백 문자 보존",
          performance: "textContent 사용 비교 검토"
        }
      }
    },
    elementManipulation: {
      appendChild: {
        description: "노드를 특정 부모 노드의 마지막 자식으로 추가",
        syntax: "parentNode.appendChild(childNode)",
        characteristics: {
          returnValue: "추가된 노드 반환",
          existingNode: "이미 존재하는 노드는 이동됨",
          liveDOM: "실시간 DOM 업데이트"
        },
        examples: {
          basic: {
            code: `
              const parent = document.getElementById('parent');
              const child = document.createElement('div');
              parent.appendChild(child);
            `,
            explanation: "새로운 자식 요소 추가"
          },
          moving: {
            code: `
              const existing = document.getElementById('existing');
              const newParent = document.getElementById('newParent');
              newParent.appendChild(existing);
            `,
            explanation: "기존 요소 이동"
          }
        },
        performance: {
          considerations: ["DOM 리플로우 발생", "레이아웃 계산 필요"],
          optimization: ["DocumentFragment 사용", "일괄 처리"]
        }
      },
      insertBefore: {
        description: "지정된 참조 노드 앞에 노드 삽입",
        syntax: "parentNode.insertBefore(newNode, referenceNode)",
        parameters: {
          newNode: "삽입할 새로운 노드",
          referenceNode: "참조 노드 (null 가능)"
        },
        behaviors: {
          nullReference: "null일 경우 appendChild처럼 동작",
          existingNode: "기존 노드 이동",
          validation: "부모-자식 관계 검증"
        },
        examples: {
          insertion: {
            code: `
              const parent = document.getElementById('parent');
              const newNode = document.createElement('div');
              const referenceNode = document.getElementById('reference');
              parent.insertBefore(newNode, referenceNode);
            `,
            explanation: "참조 노드 앞에 새로운 노드 삽입"
          }
        }
      },
      removeChild: {
        description: "자식 노드 제거",
        syntax: "parentNode.removeChild(childNode)",
        characteristics: {
          returnValue: "제거된 노드 반환",
          memory: "메모리에서 완전히 제거되지 않음",
          reuse: "반환된 노드 재사용 가능"
        },
        examples: {
          basic: {
            code: `
              const parent = document.getElementById('parent');
              const child = document.getElementById('child');
              const removedNode = parent.removeChild(child);
            `,
            explanation: "자식 노드 제거"
          },
          reattachment: {
            code: `
              const removedNode = parent.removeChild(child);
              anotherParent.appendChild(removedNode);
            `,
            explanation: "제거된 노드를 다른 부모에 재첨부"
          }
        }
      },
      replaceChild: {
        description: "기존 자식 노드를 새로운 노드로 교체",
        syntax: "parentNode.replaceChild(newChild, oldChild)",
        characteristics: {
          returnValue: "교체된 이전 노드 반환",
          validation: "부모-자식 관계 확인",
          performance: "단일 DOM 업데이트"
        },
        examples: {
          basic: {
            code: `
              const parent = document.getElementById('parent');
              const newChild = document.createElement('span');
              const oldChild = document.getElementById('oldChild');
              parent.replaceChild(newChild, oldChild);
            `,
            explanation: "기존 노드를 새로운 노드로 교체"
          }
        }
      }
    },
    elementAttributes: {
      setAttribute: {
        description: "요소의 속성 설정",
        syntax: "element.setAttribute(name, value)",
        characteristics: {
          caseInsensitive: "속성 이름 대소문자 구분 없음",
          stringValue: "값이 문자열로 변환됨",
          specialAttributes: {
            class: "className 속성과 동기화",
            id: "요소 식별자로 사용",
            style: "CSS 스타일 지정"
          }
        },
        examples: {
          basic: `element.setAttribute('class', 'highlight');`,
          dataAttribute: `element.setAttribute('data-id', '123');`,
          ariaAttribute: `element.setAttribute('aria-label', '설명');`
        }
      },
      getAttribute: {
        description: "요소의 속성 값 반환",
        syntax: "element.getAttribute(attributeName)",
        returnValues: {
          found: "속성 값 문자열",
          notFound: "null",
          empty: "빈 문자열"
        },
        examples: {
          basic: {
            code: `
              const element = document.getElementById('element');
              const className = element.getAttribute('class');
            `,
            explanation: "class 속성 값 가져오기"
          }
        }
      },
      removeAttribute: {
        description: "요소의 속성 제거",
        syntax: "element.removeAttribute(attributeName)",
        usage: {
          cleanup: "불필요한 속성 제거",
          reset: "기본값으로 재설정",
          toggle: "속성 토글 구현"
        },
        examples: {
          basic: {
            code: `
              const element = document.getElementById('element');
              element.removeAttribute('class');
            `,
            explanation: "class 속성 제거"
          }
        }
      },
      hasAttribute: {
        description: "속성 존재 여부 확인",
        syntax: "element.hasAttribute(attributeName)",
        returnValue: "boolean (true/false)",
        usage: "조건부 로직 구현",
        examples: {
          basic: {
            code: `
              const element = document.getElementById('element');
              if (element.hasAttribute('disabled')) {
                // 비활성화된 상태 처리
              }
            `,
            explanation: "disabled 속성 존재 여부 확인 후 처리"
          }
        }
      }
    },
    elementContent: {
      innerHTML: {
        description: "요소의 HTML 내용을 가져오거나 설정",
        characteristics: {
          parsing: "HTML 파싱 수행",
          security: "XSS 취약점 주의",
          performance: "대규모 변경 시 성능 영향"
        },
        bestPractices: {
          sanitization: "사용자 입력 데이터 정제",
          alternatives: {
            textContent: "순수 텍스트 처리",
            createElement: "동적 요소 생성"
          }
        },
        examples: {
          basic: {
            code: `
              const element = document.getElementById('element');
              element.innerHTML = '<p>새로운 내용</p>';
            `,
            explanation: "innerHTML을 사용하여 새로운 HTML 내용 설정"
          }
        }
      },
      textContent: {
        description: "요소의 텍스트 내용을 가져오거나 설정",
        advantages: {
          security: "HTML 파싱 없음",
          performance: "innerHTML보다 빠름",
          simplicity: "텍스트만 처리"
        },
        comparison: {
          innerText: {
            differences: ["스타일 고려", "성능 차이", "가시성 처리"],
            usage: "화면에 표시되는 텍스트만 필요할 때"
          }
        },
        examples: {
          basic: {
            code: `
              const element = document.getElementById('element');
              element.textContent = '새로운 텍스트 내용';
            `,
            explanation: "textContent를 사용하여 텍스트 내용 설정"
          }
        }
      }
    },
    traversalMethods: {
      parentNode: {
        description: "요소의 부모 노드 반환",
        characteristics: {
          returnValue: "직계 부모 노드",
          nullCase: "최상위 노드의 경우 null"
        },
        examples: {
          basic: {
            code: `
              const child = document.getElementById('child');
              const parent = child.parentNode;
            `,
            explanation: "child 요소의 부모 노드 가져오기"
          }
        }
      },
      children: {
        description: "요소의 자식 요소들을 반환",
        characteristics: {
          liveCollection: "실시간 업데이트",
          elementNodesOnly: "요소 노드만 포함"
        },
        examples: {
          basic: {
            code: `
              const parent = document.getElementById('parent');
              const children = parent.children;
            `,
            explanation: "parent 요소의 자식 요소들 가져오기"
          }
        }
      },
      firstElementChild: {
        description: "첫 번째 자식 요소 반환",
        usage: "첫 번째 자식 요소 조작",
        examples: {
          basic: {
            code: `
              const parent = document.getElementById('parent');
              const firstChild = parent.firstElementChild;
            `,
            explanation: "parent의 첫 번째 자식 요소 가져오기"
          }
        }
      },
      lastElementChild: {
        description: "마지막 자식 요소 반환",
        usage: "마지막 자식 요소 조작",
        examples: {
          basic: {
            code: `
              const parent = document.getElementById('parent');
              const lastChild = parent.lastElementChild;
            `,
            explanation: "parent의 마지막 자식 요소 가져오기"
          }
        }
      }
    },
    utilityMethods: {
      cloneNode: {
        description: "노드의 복사본 생성",
        syntax: "node.cloneNode(deep)",
        parameters: {
          deep: {
            type: "boolean",
            description: "깊은 복사 여부",
            default: "false"
          }
        },
        considerations: {
          eventHandlers: "이벤트 핸들러 복사되지 않음",
          ids: "ID 중복 주의",
          references: "참조 관계 재설정 필요"
        },
        examples: {
          basic: {
            code: `
              const original = document.getElementById('original');
              const clone = original.cloneNode(true);
              document.body.appendChild(clone);
            `,
            explanation: "원본 노드의 깊은 복사본을 생성하여 추가"
          }
        }
      },
      contains: {
        description: "특정 노드가 자손인지 확인",
        syntax: "parentNode.contains(childNode)",
        returnValue: "boolean (true/false)",
        usage: "DOM 트리 관계 확인",
        examples: {
          basic: {
            code: `
              const parent = document.getElementById('parent');
              const child = document.getElementById('child');
              const result = parent.contains(child);
            `,
            explanation: "parent가 child의 조상인지 확인"
          }
        }
      }
    },
    performanceConsiderations: {
      reflow: {
        description: "레이아웃 재계산이 필요한 작업",
        triggers: ["DOM 구조 변경", "요소 크기/위치 변경"],
        optimization: {
          batchOperations: "여러 변경 사항 일괄 처리",
          documentFragment: "임시 컨테이너 활용",
          positioning: "absolute/fixed 활용"
        }
      },
      repaint: {
        description: "시각적 변경으로 인한 다시 그리기",
        triggers: ["색상 변경", "가시성 변경"],
        optimization: {
          classChanges: "클래스 전환으로 최적화",
          compositeLayers: "하드웨어 가속 활용"
        }
      }
    },
    browserCompatibility: {
      modernBrowsers: {
        features: "최신 DOM API 지원",
        considerations: "폴리필 필요성 검토"
      },
      legacySupport: {
        issues: ["IE 지원", "구형 브라우저 호환성"],
        solutions: {
          polyfills: "필요한 기능 폴리필 추가",
          fallbacks: "대체 구현 제공"
        }
      }
    }
  },
  
  layoutGuide: {
    name: "Web Application Layout Guide",
    description: "ChatGPT, Gemini, VSCode와 유사한 레이아웃을 생성하기 위한 가이드",
    version: "1.0.0",
    sections: [
      {
        id: "header",
        name: "Header",
        description: "애플리케이션 제목, 글로벌 네비게이션, 사용자 설정을 포함",
        components: [
          {
            id: "logo",
            name: "Application Logo",
            type: "image",
            suggestion: "애플리케이션의 로고 또는 이름을 표시."
          },
          {
            id: "main-nav",
            name: "Main Navigation",
            type: "menu",
            suggestion: "애플리케이션의 주요 섹션으로의 링크 (예: Home, About, Contact).",
            items: [
              { id: "nav-home", label: "Home", link: "/" },
              { id: "nav-about", label: "About", link: "/about" },
              { id: "nav-contact", label: "Contact", link: "/contact" }
            ]
          },
          {
            id: "user-menu",
            name: "User Menu",
            type: "dropdown",
            suggestion: "사용자 프로필, 설정, 로그아웃에 접근.",
            items: [
              { id: "user-profile", label: "Profile", link: "/profile" },
              { id: "user-settings", label: "Settings", link: "/settings" },
              { id: "user-logout", label: "Logout", link: "/logout" }
            ]
          }
        ],
        styles: {
          backgroundColor: "#f0f0f0",
          padding: "10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }
      },
      {
        id: "sidebar",
        name: "Sidebar",
        description: "도구, 설정 또는 보조 네비게이션에 빠르게 접근할 수 있도록 제공.",
        components: [
          {
            id: "tool-list",
            name: "Tool List",
            type: "list",
            suggestion: "애플리케이션 내에서 사용할 수 있는 도구의 아이콘 또는 이름.",
            items: [
              { id: "tool-1", label: "Tool 1", icon: "tool1.svg" },
              { id: "tool-2", label: "Tool 2", icon: "tool2.svg" },
              { id: "tool-3", label: "Tool 3", icon: "tool3.svg" }
            ]
          },
          {
            id: "context-menu",
            name: "Contextual Menu",
            type: "menu",
            suggestion: "상황별 액션 또는 설정으로의 링크.",
            items: [
              { id: "context-action-1", label: "Action 1", link: "/action1" },
              { id: "context-setting-1", label: "Setting 1", link: "/setting1" }
            ]
          }
        ],
        styles: {
          width: "250px",
          backgroundColor: "#e0e0e0",
          padding: "10px"
        }
      },
      {
        id: "main-content",
        name: "Main Content Area",
        description: "콘텐츠를 표시하고 애플리케이션과 상호작용하는 주요 영역.",
        components: [
          {
            id: "content-header",
            name: "Content Header",
            type: "header",
            suggestion: "현재 콘텐츠의 제목과 간략한 설명을 포함.",
            styles: {
              marginBottom: "20px"
            }
          },
          {
            id: "content-body",
            name: "Content Body",
            type: "container",
            suggestion: "텍스트, 폼, 인터랙티브 요소 등 주요 콘텐츠를 담음."
          }
        ],
        styles: {
          flexGrow: "1",
          padding: "20px",
          overflowY: "auto"
        }
      },
      {
        id: "chat-input",
        name: "Chat Input Area",
        description: "챗봇과 유사한 애플리케이션에서 사용자 입력을 위한 영역. ChatGPT 및 Gemini와 유사.",
        components: [
          {
            id: "text-input",
            name: "Text Input",
            type: "textarea",
            suggestion: "사용자가 메시지를 입력할 수 있도록 함.",
            placeholder: "Enter your message here..."
          },
          {
            id: "send-button",
            name: "Send Button",
            type: "button",
            suggestion: "사용자의 메시지를 전송.",
            label: "Send"
          }
        ],
        styles: {
          position: "fixed",
          bottom: "0",
          left: "250px", // Assuming sidebar width is 250px
          right: "0",
          padding: "10px",
          backgroundColor: "#f0f0f0",
          borderTop: "1px solid #ccc"
        }
      },
      {
        id: "footer",
        name: "Footer",
        description: "저작권 정보, 법적 문서 링크 및 기타 메타데이터 포함.",
        components: [
          {
            id: "copyright",
            name: "Copyright Notice",
            type: "text",
            suggestion: "저작권 연도 및 소유자를 표시.",
            content: "© 2023 Your Company Name"
          },
          {
            id: "legal-links",
            name: "Legal Links",
            type: "menu",
            suggestion: "서비스 약관, 개인정보 보호정책 등의 링크.",
            items: [
              { id: "terms", label: "Terms of Service", link: "/terms" },
              { id: "privacy", label: "Privacy Policy", link: "/privacy" }
            ]
          }
        ],
        styles: {
          backgroundColor: "#f0f0f0",
          padding: "10px",
          textAlign: "center"
        }
      }
    ],
    globalStyles: {
      fontFamily: "Arial, sans-serif",
      margin: "0",
      padding: "0",
      boxSizing: "border-box"
    }
  },
  
  DOMOffsetProperties: {
    elementDimensions: {
      offsetWidth: {
        definition: "요소의 전체 너비를 픽셀 단위로 반환하는 읽기 전용 속성",
        calculation: {
          components: {
            width: "요소의 CSS width",
            padding: "좌우 패딩 값",
            border: "좌우 테두리 두께",
            scrollbar: "수직 스크롤바가 있는 경우 해당 너비"
          },
          formula: "width + paddingLeft + paddingRight + borderLeft + borderRight + scrollbarWidth",
          example: {
            css: `
              .element {
                width: 100px;
                padding: 10px;
                border: 1px solid black;
              }
            `,
            calculation: "100 + (10 × 2) + (1 × 2) = 122px"
          }
        },
        characteristics: {
          rounding: "정수로 반올림됨",
          updates: "레이아웃 변경 시 자동 업데이트",
          performance: "레이아웃 리플로우 발생 가능"
        }
      },
      offsetHeight: {
        definition: "요소의 전체 높이를 픽셀 단위로 반환하는 읽기 전용 속성",
        calculation: {
          components: {
            height: "요소의 CSS height",
            padding: "상하 패딩 값",
            border: "상하 테두리 두께",
            scrollbar: "수평 스크롤바가 있는 경우 해당 높이"
          },
          formula: "height + paddingTop + paddingBottom + borderTop + borderBottom + scrollbarHeight",
          example: {
            css: `
              .element {
                height: 100px;
                padding: 10px;
                border: 1px solid black;
              }
            `,
            calculation: "100 + (10 × 2) + (1 × 2) = 122px"
          }
        },
        characteristics: {
          visibility: "display: none인 경우 0 반환",
          collapse: "visibility: collapse인 경우 0 반환",
          hidden: "요소가 숨겨진 경우에도 실제 크기 반환"
        }
      }
    },
    positionProperties: {
      offsetLeft: {
        definition: "요소의 좌측 외부 경계와 offsetParent의 좌측 내부 경계 사이의 거리",
        considerations: {
          offsetParent: {
            definition: "가장 가까운 위치 지정된 조상 요소",
            positioning: ["relative", "absolute", "fixed"],
            fallback: "body 요소",
            special: "td, th, table은 offsetParent가 될 수 있음"
          },
          calculation: {
            margin: "마진은 포함되지 않음",
            positioning: "위치 지정 방식에 따라 값이 달라짐",
            scrolling: "스크롤 위치에 영향받지 않음"
          },
          examples: {
            static: "일반 배치 흐름에서의 위치",
            relative: "상대 위치 지정 시의 오프셋",
            absolute: "절대 위치 지정 시의 오프셋"
          }
        }
      },
      offsetTop: {
        definition: "요소의 상단 외부 경계와 offsetParent의 상단 내부 경계 사이의 거리",
        considerations: {
          measurement: {
            reference: "offsetParent 기준 측정",
            units: "픽셀 단위 반환",
            rounding: "정수로 반올림"
          },
          behaviors: {
            scrolling: "페이지 스크롤에 영향받지 않음",
            transforms: "CSS 변환의 영향을 받음",
            positioning: "위치 지정 방식에 따른 변화"
          }
        }
      }
    },
    scrollProperties: {
      scrollWidth: {
        definition: "요소의 전체 스크롤 가능 너비",
        characteristics: {
          overflow: "내용이 넘치는 경우 실제 콘텐츠 너비 포함",
          padding: "패딩 포함",
          border: "테두리 제외",
          calculation: "보이는 영역 + 넘치는 영역"
        }
      },
      scrollHeight: {
        definition: "요소의 전체 스크롤 가능 높이",
        usage: {
          pageHeight: "문서 전체 높이 확인",
          contentSize: "실제 콘텐츠 크기 측정",
          scrollProgress: "스크롤 진행률 계산"
        }
      },
      scrollLeft: {
        definition: "요소의 수평 스크롤 위치",
        characteristics: {
          readable: "현재 스크롤 위치 읽기 가능",
          writable: "스크롤 위치 설정 가능",
          rtl: "RTL 언어에서의 동작 차이"
        }
      },
      scrollTop: {
        definition: "요소의 수직 스크롤 위치",
        applications: {
          scrollTracking: "스크롤 위치 추적",
          smoothScroll: "부드러운 스크롤 구현",
          infiniteScroll: "무한 스크롤 구현"
        }
      }
    },
    clientProperties: {
      clientWidth: {
        definition: "요소의 내부 너비 (패딩 포함, 테두리/스크롤바 제외)",
        calculation: {
          components: ["CSS width", "padding"],
          excludes: ["border", "scrollbar", "margin"]
        }
      },
      clientHeight: {
        definition: "요소의 내부 높이 (패딩 포함, 테두리/스크롤바 제외)",
        usage: {
          viewportSize: "뷰포트 크기 측정",
          contentArea: "콘텐츠 영역 크기 계산",
          layoutCalculations: "레이아웃 계산"
        }
      }
    },
    practicalApplications: {
      elementPositioning: {
        absolutePosition: {
          calculation: {
            method: "offsetLeft/Top 값의 재귀적 합산",
            considerations: ["스크롤 위치", "변환", "뷰포트 위치"]
          },
          example: {
            code: `
              function getAbsolutePosition(element) {
                let left = 0, top = 0;
                while(element) {
                  left += element.offsetLeft - element.scrollLeft;
                  top += element.offsetTop - element.scrollTop;
                  element = element.offsetParent;
                }
                return { left, top };
              }
            `,
            usage: "요소의 절대 위치 계산"
          }
        },
        viewportPosition: {
          calculation: {
            method: "getBoundingClientRect() 사용",
            properties: ["top", "right", "bottom", "left"],
            considerations: ["스크롤 위치", "변환"]
          }
        }
      },
      scrollHandling: {
        infiniteScroll: {
          implementation: {
            detection: "scrollHeight - scrollTop === clientHeight",
            threshold: "로딩 시작 임계값 설정",
            optimization: "스로틀링/디바운싱 적용"
          }
        },
        scrollProgress: {
          calculation: {
            formula: "(scrollTop / (scrollHeight - clientHeight)) * 100",
            usage: "스크롤 진행률 표시"
          }
        }
      },
      elementResizing: {
        dimensions: {
          calculation: {
            width: "offsetWidth vs clientWidth 선택",
            height: "offsetHeight vs clientHeight 선택"
          },
          considerations: {
            boxSizing: "box-sizing 속성의 영향",
            scrollbars: "스크롤바 존재 여부",
            borders: "테두리 두께"
          }
        }
      },
      performanceOptimization: {
        layoutThrashing: {
          problem: "잦은 레이아웃 계산으로 인한 성능 저하",
          solutions: {
            batchReading: "오프셋 값 읽기 일괄 처리",
            caching: "계산된 값 캐싱",
            requestAnimationFrame: "레이아웃 계산 최적화"
          }
        },
        bestPractices: {
          measurement: "필요한 경우에만 오프셋 값 측정",
          caching: "자주 사용되는 값 저장",
          alternatives: "가능한 경우 getBoundingClientRect() 사용"
        }
      }
    },
    crossBrowserConsiderations: {
      implementations: {
        differences: {
          rounding: "브라우저별 반올림 처리 차이",
          scrollbar: "스크롤바 처리 방식 차이",
          rtl: "RTL 텍스트 방향에서의 차이"
        },
        solutions: {
          normalization: "값 정규화 함수 사용",
          feature: "기능 감지 및 대체 구현",
          testing: "크로스 브라우저 테스트"
        }
      }
    }
  },
  
  DOMElementMethods: {
    elementCreation: {
      createElement: {
        description: "새로운 HTML 요소를 생성하는 메서드",
        syntax: "document.createElement(tagName[, options])",
        parameters: {
          tagName: {
            type: "문자열",
            description: "생성할 HTML 요소의 태그 이름",
            examples: ["div", "p", "span", "button"]
          },
          options: {
            type: "객체",
            properties: {
              is: "커스텀 엘리먼트 정의",
              customElements: "웹 컴포넌트 관련 설정"
            }
          }
        },
        usage: {
          basic: {
            code: `const divElement = document.createElement('div');`,
            explanation: "기본적인 div 요소 생성"
          },
          advanced: {
            code: `
              const customButton = document.createElement('button', {
                is: 'custom-button'
              });
            `,
            explanation: "커스텀 엘리먼트로 버튼 생성"
          }
        },
        bestPractices: {
          performance: {
            documentFragment: "여러 요소 생성 시 DocumentFragment 사용",
            batchCreation: "반복문 내 createElement 최소화"
          },
          validation: "올바른 태그 이름 사용 확인",
          compatibility: "브라우저 지원 범위 확인"
        }
      },
      createTextNode: {
        description: "텍스트 노드를 생성하는 메서드",
        syntax: "document.createTextNode(data)",
        usage: {
          basic: `const text = document.createTextNode('Hello World');`,
          withElement: `
            const div = document.createElement('div');
            const text = document.createTextNode('Hello World');
            div.appendChild(text);
          `
        },
        considerations: {
          escaping: "HTML 특수문자 자동 이스케이프",
          whitespace: "공백 문자 보존",
          performance: "textContent 사용 비교 검토"
        }
      }
    },
    elementManipulation: {
      appendChild: {
        description: "노드를 특정 부모 노드의 마지막 자식으로 추가",
        syntax: "parentNode.appendChild(childNode)",
        characteristics: {
          returnValue: "추가된 노드 반환",
          existingNode: "이미 존재하는 노드는 이동됨",
          liveDOM: "실시간 DOM 업데이트"
        },
        examples: {
          basic: {
            code: `
              const parent = document.getElementById('parent');
              const child = document.createElement('div');
              parent.appendChild(child);
            `,
            explanation: "새로운 자식 요소 추가"
          },
          moving: {
            code: `
              const existing = document.getElementById('existing');
              const newParent = document.getElementById('newParent');
              newParent.appendChild(existing);
            `,
            explanation: "기존 요소 이동"
          }
        },
        performance: {
          considerations: ["DOM 리플로우 발생", "레이아웃 계산 필요"],
          optimization: ["DocumentFragment 사용", "일괄 처리"]
        }
      },
      insertBefore: {
        description: "지정된 참조 노드 앞에 노드 삽입",
        syntax: "parentNode.insertBefore(newNode, referenceNode)",
        parameters: {
          newNode: "삽입할 새로운 노드",
          referenceNode: "참조 노드 (null 가능)"
        },
        behaviors: {
          nullReference: "null일 경우 appendChild처럼 동작",
          existingNode: "기존 노드 이동",
          validation: "부모-자식 관계 검증"
        },
        examples: {
          insertion: {
            code: `
              const parent = document.getElementById('parent');
              const newNode = document.createElement('div');
              const referenceNode = document.getElementById('reference');
              parent.insertBefore(newNode, referenceNode);
            `,
            explanation: "참조 노드 앞에 새로운 노드 삽입"
          }
        }
      },
      removeChild: {
        description: "자식 노드 제거",
        syntax: "parentNode.removeChild(childNode)",
        characteristics: {
          returnValue: "제거된 노드 반환",
          memory: "메모리에서 완전히 제거되지 않음",
          reuse: "반환된 노드 재사용 가능"
        },
        examples: {
          basic: {
            code: `
              const parent = document.getElementById('parent');
              const child = document.getElementById('child');
              const removedNode = parent.removeChild(child);
            `,
            explanation: "자식 노드 제거"
          },
          reattachment: {
            code: `
              const removedNode = parent.removeChild(child);
              anotherParent.appendChild(removedNode);
            `,
            explanation: "제거된 노드를 다른 부모에 재첨부"
          }
        }
      },
      replaceChild: {
        description: "기존 자식 노드를 새로운 노드로 교체",
        syntax: "parentNode.replaceChild(newChild, oldChild)",
        characteristics: {
          returnValue: "교체된 이전 노드 반환",
          validation: "부모-자식 관계 확인",
          performance: "단일 DOM 업데이트"
        },
        examples: {
          basic: {
            code: `
              const parent = document.getElementById('parent');
              const newChild = document.createElement('span');
              const oldChild = document.getElementById('oldChild');
              parent.replaceChild(newChild, oldChild);
            `,
            explanation: "기존 노드를 새로운 노드로 교체"
          }
        }
      }
    },
    elementAttributes: {
      setAttribute: {
        description: "요소의 속성 설정",
        syntax: "element.setAttribute(name, value)",
        characteristics: {
          caseInsensitive: "속성 이름 대소문자 구분 없음",
          stringValue: "값이 문자열로 변환됨",
          specialAttributes: {
            class: "className 속성과 동기화",
            id: "요소 식별자로 사용",
            style: "CSS 스타일 지정"
          }
        },
        examples: {
          basic: `element.setAttribute('class', 'highlight');`,
          dataAttribute: `element.setAttribute('data-id', '123');`,
          ariaAttribute: `element.setAttribute('aria-label', '설명');`
        }
      },
      getAttribute: {
        description: "요소의 속성 값 반환",
        syntax: "element.getAttribute(attributeName)",
        returnValues: {
          found: "속성 값 문자열",
          notFound: "null",
          empty: "빈 문자열"
        },
        examples: {
          basic: {
            code: `
              const element = document.getElementById('element');
              const className = element.getAttribute('class');
            `,
            explanation: "class 속성 값 가져오기"
          }
        }
      },
      removeAttribute: {
        description: "요소의 속성 제거",
        syntax: "element.removeAttribute(attributeName)",
        usage: {
          cleanup: "불필요한 속성 제거",
          reset: "기본값으로 재설정",
          toggle: "속성 토글 구현"
        },
        examples: {
          basic: {
            code: `
              const element = document.getElementById('element');
              element.removeAttribute('class');
            `,
            explanation: "class 속성 제거"
          }
        }
      },
      hasAttribute: {
        description: "속성 존재 여부 확인",
        syntax: "element.hasAttribute(attributeName)",
        returnValue: "boolean (true/false)",
        usage: "조건부 로직 구현",
        examples: {
          basic: {
            code: `
              const element = document.getElementById('element');
              if (element.hasAttribute('disabled')) {
                // 비활성화된 상태 처리
              }
            `,
            explanation: "disabled 속성 존재 여부 확인 후 처리"
          }
        }
      }
    },
    elementContent: {
      innerHTML: {
        description: "요소의 HTML 내용을 가져오거나 설정",
        characteristics: {
          parsing: "HTML 파싱 수행",
          security: "XSS 취약점 주의",
          performance: "대규모 변경 시 성능 영향"
        },
        bestPractices: {
          sanitization: "사용자 입력 데이터 정제",
          alternatives: {
            textContent: "순수 텍스트 처리",
            createElement: "동적 요소 생성"
          }
        },
        examples: {
          basic: {
            code: `
              const element = document.getElementById('element');
              element.innerHTML = '<p>새로운 내용</p>';
            `,
            explanation: "innerHTML을 사용하여 새로운 HTML 내용 설정"
          }
        }
      },
      textContent: {
        description: "요소의 텍스트 내용을 가져오거나 설정",
        advantages: {
          security: "HTML 파싱 없음",
          performance: "innerHTML보다 빠름",
          simplicity: "텍스트만 처리"
        },
        comparison: {
          innerText: {
            differences: ["스타일 고려", "성능 차이", "가시성 처리"],
            usage: "화면에 표시되는 텍스트만 필요할 때"
          }
        },
        examples: {
          basic: {
            code: `
              const element = document.getElementById('element');
              element.textContent = '새로운 텍스트 내용';
            `,
            explanation: "textContent를 사용하여 텍스트 내용 설정"
          }
        }
      }
    },
    traversalMethods: {
      parentNode: {
        description: "요소의 부모 노드 반환",
        characteristics: {
          returnValue: "직계 부모 노드",
          nullCase: "최상위 노드의 경우 null"
        },
        examples: {
          basic: {
            code: `
              const child = document.getElementById('child');
              const parent = child.parentNode;
            `,
            explanation: "child 요소의 부모 노드 가져오기"
          }
        }
      },
      children: {
        description: "요소의 자식 요소들을 반환",
        characteristics: {
          liveCollection: "실시간 업데이트",
          elementNodesOnly: "요소 노드만 포함"
        },
        examples: {
          basic: {
            code: `
              const parent = document.getElementById('parent');
              const children = parent.children;
            `,
            explanation: "parent 요소의 자식 요소들 가져오기"
          }
        }
      },
      firstElementChild: {
        description: "첫 번째 자식 요소 반환",
        usage: "첫 번째 자식 요소 조작",
        examples: {
          basic: {
            code: `
              const parent = document.getElementById('parent');
              const firstChild = parent.firstElementChild;
            `,
            explanation: "parent의 첫 번째 자식 요소 가져오기"
          }
        }
      },
      lastElementChild: {
        description: "마지막 자식 요소 반환",
        usage: "마지막 자식 요소 조작",
        examples: {
          basic: {
            code: `
              const parent = document.getElementById('parent');
              const lastChild = parent.lastElementChild;
            `,
            explanation: "parent의 마지막 자식 요소 가져오기"
          }
        }
      }
    },
    utilityMethods: {
      cloneNode: {
        description: "노드의 복사본 생성",
        syntax: "node.cloneNode(deep)",
        parameters: {
          deep: {
            type: "boolean",
            description: "깊은 복사 여부",
            default: "false"
          }
        },
        considerations: {
          eventHandlers: "이벤트 핸들러 복사되지 않음",
          ids: "ID 중복 주의",
          references: "참조 관계 재설정 필요"
        },
        examples: {
          basic: {
            code: `
              const original = document.getElementById('original');
              const clone = original.cloneNode(true);
              document.body.appendChild(clone);
            `,
            explanation: "원본 노드의 깊은 복사본을 생성하여 추가"
          }
        }
      },
      contains: {
        description: "특정 노드가 자손인지 확인",
        syntax: "parentNode.contains(childNode)",
        returnValue: "boolean (true/false)",
        usage: "DOM 트리 관계 확인",
        examples: {
          basic: {
            code: `
              const parent = document.getElementById('parent');
              const child = document.getElementById('child');
              const result = parent.contains(child);
            `,
            explanation: "parent가 child의 조상인지 확인"
          }
        }
      }
    },
    performanceConsiderations: {
      reflow: {
        description: "레이아웃 재계산이 필요한 작업",
        triggers: ["DOM 구조 변경", "요소 크기/위치 변경"],
        optimization: {
          batchOperations: "여러 변경 사항 일괄 처리",
          documentFragment: "임시 컨테이너 활용",
          positioning: "absolute/fixed 활용"
        }
      },
      repaint: {
        description: "시각적 변경으로 인한 다시 그리기",
        triggers: ["색상 변경", "가시성 변경"],
        optimization: {
          classChanges: "클래스 전환으로 최적화",
          compositeLayers: "하드웨어 가속 활용"
        }
      }
    },
    browserCompatibility: {
      modernBrowsers: {
        features: "최신 DOM API 지원",
        considerations: "폴리필 필요성 검토"
      },
      legacySupport: {
        issues: ["IE 지원", "구형 브라우저 호환성"],
        solutions: {
          polyfills: "필요한 기능 폴리필 추가",
          fallbacks: "대체 구현 제공"
        }
      }
    }
  },
  
  layoutGuide: {
    name: "Web Application Layout Guide",
    description: "ChatGPT, Gemini, VSCode와 유사한 레이아웃을 생성하기 위한 가이드",
    version: "1.0.0",
    sections: [
      {
        id: "header",
        name: "Header",
        description: "애플리케이션 제목, 글로벌 네비게이션, 사용자 설정을 포함",
        components: [
          {
            id: "logo",
            name: "Application Logo",
            type: "image",
            suggestion: "애플리케이션의 로고 또는 이름을 표시."
          },
          {
            id: "main-nav",
            name: "Main Navigation",
            type: "menu",
            suggestion: "애플리케이션의 주요 섹션으로의 링크 (예: Home, About, Contact).",
            items: [
              { id: "nav-home", label: "Home", link: "/" },
              { id: "nav-about", label: "About", link: "/about" },
              { id: "nav-contact", label: "Contact", link: "/contact" }
            ]
          },
          {
            id: "user-menu",
            name: "User Menu",
            type: "dropdown",
            suggestion: "사용자 프로필, 설정, 로그아웃에 접근.",
            items: [
              { id: "user-profile", label: "Profile", link: "/profile" },
              { id: "user-settings", label: "Settings", link: "/settings" },
              { id: "user-logout", label: "Logout", link: "/logout" }
            ]
          }
        ],
        styles: {
          backgroundColor: "#f0f0f0",
          padding: "10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }
      },
      {
        id: "sidebar",
        name: "Sidebar",
        description: "도구, 설정 또는 보조 네비게이션에 빠르게 접근할 수 있도록 제공.",
        components: [
          {
            id: "tool-list",
            name: "Tool List",
            type: "list",
            suggestion: "애플리케이션 내에서 사용할 수 있는 도구의 아이콘 또는 이름.",
            items: [
              { id: "tool-1", label: "Tool 1", icon: "tool1.svg" },
              { id: "tool-2", label: "Tool 2", icon: "tool2.svg" },
              { id: "tool-3", label: "Tool 3", icon: "tool3.svg" }
            ]
          },
          {
            id: "context-menu",
            name: "Contextual Menu",
            type: "menu",
            suggestion: "상황별 액션 또는 설정으로의 링크.",
            items: [
              { id: "context-action-1", label: "Action 1", link: "/action1" },
              { id: "context-setting-1", label: "Setting 1", link: "/setting1" }
            ]
          }
        ],
        styles: {
          width: "250px",
          backgroundColor: "#e0e0e0",
          padding: "10px"
        }
      },
      {
        id: "main-content",
        name: "Main Content Area",
        description: "콘텐츠를 표시하고 애플리케이션과 상호작용하는 주요 영역.",
        components: [
          {
            id: "content-header",
            name: "Content Header",
            type: "header",
            suggestion: "현재 콘텐츠의 제목과 간략한 설명을 포함.",
            styles: {
              marginBottom: "20px"
            }
          },
          {
            id: "content-body",
            name: "Content Body",
            type: "container",
            suggestion: "텍스트, 폼, 인터랙티브 요소 등 주요 콘텐츠를 담음."
          }
        ],
        styles: {
          flexGrow: "1",
          padding: "20px",
          overflowY: "auto"
        }
      },
      {
        id: "chat-input",
        name: "Chat Input Area",
        description: "챗봇과 유사한 애플리케이션에서 사용자 입력을 위한 영역. ChatGPT 및 Gemini와 유사.",
        components: [
          {
            id: "text-input",
            name: "Text Input",
            type: "textarea",
            suggestion: "사용자가 메시지를 입력할 수 있도록 함.",
            placeholder: "Enter your message here..."
          },
          {
            id: "send-button",
            name: "Send Button",
            type: "button",
            suggestion: "사용자의 메시지를 전송.",
            label: "Send"
          }
        ],
        styles: {
          position: "fixed",
          bottom: "0",
          left: "250px", // Assuming sidebar width is 250px
          right: "0",
          padding: "10px",
          backgroundColor: "#f0f0f0",
          borderTop: "1px solid #ccc"
        }
      },
      {
        id: "footer",
        name: "Footer",
        description: "저작권 정보, 법적 문서 링크 및 기타 메타데이터 포함.",
        components: [
          {
            id: "copyright",
            name: "Copyright Notice",
            type: "text",
            suggestion: "저작권 연도 및 소유자를 표시.",
            content: "© 2023 Your Company Name"
          },
          {
            id: "legal-links",
            name: "Legal Links",
            type: "menu",
            suggestion: "서비스 약관, 개인정보 보호정책 등의 링크.",
            items: [
              { id: "terms", label: "Terms of Service", link: "/terms" },
              { id: "privacy", label: "Privacy Policy", link: "/privacy" }
            ]
          }
        ],
        styles: {
          backgroundColor: "#f0f0f0",
          padding: "10px",
          textAlign: "center"
        }
      }
    ],
    globalStyles: {
      fontFamily: "Arial, sans-serif",
      margin: "0",
      padding: "0",
      boxSizing: "border-box"
    }
  },
  
  DOMElementMethods: {
    elementCreation: {
      createElement: {
        description: "새로운 HTML 요소를 생성하는 메서드",
        syntax: "document.createElement(tagName[, options])",
        parameters: {
          tagName: {
            type: "문자열",
            description: "생성할 HTML 요소의 태그 이름",
            examples: ["div", "p", "span", "button"]
          },
          options: {
            type: "객체",
            properties: {
              is: "커스텀 엘리먼트 정의",
              customElements: "웹 컴포넌트 관련 설정"
            }
          }
        },
        usage: {
          basic: {
            code: `const divElement = document.createElement('div');`,
            explanation: "기본적인 div 요소 생성"
          },
          advanced: {
            code: `
              const customButton = document.createElement('button', {
                is: 'custom-button'
              });
            `,
            explanation: "커스텀 엘리먼트로 버튼 생성"
          }
        },
        bestPractices: {
          performance: {
            documentFragment: "여러 요소 생성 시 DocumentFragment 사용",
            batchCreation: "반복문 내 createElement 최소화"
          },
          validation: "올바른 태그 이름 사용 확인",
          compatibility: "브라우저 지원 범위 확인"
        }
      },
      createTextNode: {
        description: "텍스트 노드를 생성하는 메서드",
        syntax: "document.createTextNode(data)",
        usage: {
          basic: `const text = document.createTextNode('Hello World');`,
          withElement: `
            const div = document.createElement('div');
            const text = document.createTextNode('Hello World');
            div.appendChild(text);
          `
        },
        considerations: {
          escaping: "HTML 특수문자 자동 이스케이프",
          whitespace: "공백 문자 보존",
          performance: "textContent 사용 비교 검토"
        }
      }
    },
    elementManipulation: {
      appendChild: {
        description: "노드를 특정 부모 노드의 마지막 자식으로 추가",
        syntax: "parentNode.appendChild(childNode)",
        characteristics: {
          returnValue: "추가된 노드 반환",
          existingNode: "이미 존재하는 노드는 이동됨",
          liveDOM: "실시간 DOM 업데이트"
        },
        examples: {
          basic: {
            code: `
              const parent = document.getElementById('parent');
              const child = document.createElement('div');
              parent.appendChild(child);
            `,
            explanation: "새로운 자식 요소 추가"
          },
          moving: {
            code: `
              const existing = document.getElementById('existing');
              const newParent = document.getElementById('newParent');
              newParent.appendChild(existing);
            `,
            explanation: "기존 요소 이동"
          }
        },
        performance: {
          considerations: ["DOM 리플로우 발생", "레이아웃 계산 필요"],
          optimization: ["DocumentFragment 사용", "일괄 처리"]
        }
      },
      insertBefore: {
        description: "지정된 참조 노드 앞에 노드 삽입",
        syntax: "parentNode.insertBefore(newNode, referenceNode)",
        parameters: {
          newNode: "삽입할 새로운 노드",
          referenceNode: "참조 노드 (null 가능)"
        },
        behaviors: {
          nullReference: "null일 경우 appendChild처럼 동작",
          existingNode: "기존 노드 이동",
          validation: "부모-자식 관계 검증"
        },
        examples: {
          insertion: {
            code: `
              const parent = document.getElementById('parent');
              const newNode = document.createElement('div');
              const referenceNode = document.getElementById('reference');
              parent.insertBefore(newNode, referenceNode);
            `,
            explanation: "참조 노드 앞에 새로운 노드 삽입"
          }
        }
      },
      removeChild: {
        description: "자식 노드 제거",
        syntax: "parentNode.removeChild(childNode)",
        characteristics: {
          returnValue: "제거된 노드 반환",
          memory: "메모리에서 완전히 제거되지 않음",
          reuse: "반환된 노드 재사용 가능"
        },
        examples: {
          basic: {
            code: `
              const parent = document.getElementById('parent');
              const child = document.getElementById('child');
              const removedNode = parent.removeChild(child);
            `,
            explanation: "자식 노드 제거"
          },
          reattachment: {
            code: `
              const removedNode = parent.removeChild(child);
              anotherParent.appendChild(removedNode);
            `,
            explanation: "제거된 노드를 다른 부모에 재첨부"
          }
        }
      },
      replaceChild: {
        description: "기존 자식 노드를 새로운 노드로 교체",
        syntax: "parentNode.replaceChild(newChild, oldChild)",
        characteristics: {
          returnValue: "교체된 이전 노드 반환",
          validation: "부모-자식 관계 확인",
          performance: "단일 DOM 업데이트"
        },
        examples: {
          basic: {
            code: `
              const parent = document.getElementById('parent');
              const newChild = document.createElement('span');
              const oldChild = document.getElementById('oldChild');
              parent.replaceChild(newChild, oldChild);
            `,
            explanation: "기존 노드를 새로운 노드로 교체"
          }
        }
      }
    },
    elementAttributes: {
      setAttribute: {
        description: "요소의 속성 설정",
        syntax: "element.setAttribute(name, value)",
        characteristics: {
          caseInsensitive: "속성 이름 대소문자 구분 없음",
          stringValue: "값이 문자열로 변환됨",
          specialAttributes: {
            class: "className 속성과 동기화",
            id: "요소 식별자로 사용",
            style: "CSS 스타일 지정"
          }
        },
        examples: {
          basic: `element.setAttribute('class', 'highlight');`,
          dataAttribute: `element.setAttribute('data-id', '123');`,
          ariaAttribute: `element.setAttribute('aria-label', '설명');`
        }
      },
      getAttribute: {
        description: "요소의 속성 값 반환",
        syntax: "element.getAttribute(attributeName)",
        returnValues: {
          found: "속성 값 문자열",
          notFound: "null",
          empty: "빈 문자열"
        },
        examples: {
          basic: {
            code: `
              const element = document.getElementById('element');
              const className = element.getAttribute('class');
            `,
            explanation: "class 속성 값 가져오기"
          }
        }
      },
      removeAttribute: {
        description: "요소의 속성 제거",
        syntax: "element.removeAttribute(attributeName)",
        usage: {
          cleanup: "불필요한 속성 제거",
          reset: "기본값으로 재설정",
          toggle: "속성 토글 구현"
        },
        examples: {
          basic: {
            code: `
              const element = document.getElementById('element');
              element.removeAttribute('class');
            `,
            explanation: "class 속성 제거"
          }
        }
      },
      hasAttribute: {
        description: "속성 존재 여부 확인",
        syntax: "element.hasAttribute(attributeName)",
        returnValue: "boolean (true/false)",
        usage: "조건부 로직 구현",
        examples: {
          basic: {
            code: `
              const element = document.getElementById('element');
              if (element.hasAttribute('disabled')) {
                // 비활성화된 상태 처리
              }
            `,
            explanation: "disabled 속성 존재 여부 확인 후 처리"
          }
        }
      }
    },
    elementContent: {
      innerHTML: {
        description: "요소의 HTML 내용을 가져오거나 설정",
        characteristics: {
          parsing: "HTML 파싱 수행",
          security: "XSS 취약점 주의",
          performance: "대규모 변경 시 성능 영향"
        },
        bestPractices: {
          sanitization: "사용자 입력 데이터 정제",
          alternatives: {
            textContent: "순수 텍스트 처리",
            createElement: "동적 요소 생성"
          }
        },
        examples: {
          basic: {
            code: `
              const element = document.getElementById('element');
              element.innerHTML = '<p>새로운 내용</p>';
            `,
            explanation: "innerHTML을 사용하여 새로운 HTML 내용 설정"
          }
        }
      },
      textContent: {
        description: "요소의 텍스트 내용을 가져오거나 설정",
        advantages: {
          security: "HTML 파싱 없음",
          performance: "innerHTML보다 빠름",
          simplicity: "텍스트만 처리"
        },
        comparison: {
          innerText: {
            differences: ["스타일 고려", "성능 차이", "가시성 처리"],
            usage: "화면에 표시되는 텍스트만 필요할 때"
          }
        },
        examples: {
          basic: {
            code: `
              const element = document.getElementById('element');
              element.textContent = '새로운 텍스트 내용';
            `,
            explanation: "textContent를 사용하여 텍스트 내용 설정"
          }
        }
      }
    },
    traversalMethods: {
      parentNode: {
        description: "요소의 부모 노드 반환",
        characteristics: {
          returnValue: "직계 부모 노드",
          nullCase: "최상위 노드의 경우 null"
        },
        examples: {
          basic: {
            code: `
              const child = document.getElementById('child');
              const parent = child.parentNode;
            `,
            explanation: "child 요소의 부모 노드 가져오기"
          }
        }
      },
      children: {
        description: "요소의 자식 요소들을 반환",
        characteristics: {
          liveCollection: "실시간 업데이트",
          elementNodesOnly: "요소 노드만 포함"
        },
        examples: {
          basic: {
            code: `
              const parent = document.getElementById('parent');
              const children = parent.children;
            `,
            explanation: "parent 요소의 자식 요소들 가져오기"
          }
        }
      },
      firstElementChild: {
        description: "첫 번째 자식 요소 반환",
        usage: "첫 번째 자식 요소 조작",
        examples: {
          basic: {
            code: `
              const parent = document.getElementById('parent');
              const firstChild = parent.firstElementChild;
            `,
            explanation: "parent의 첫 번째 자식 요소 가져오기"
          }
        }
      },
      lastElementChild: {
        description: "마지막 자식 요소 반환",
        usage: "마지막 자식 요소 조작",
        examples: {
          basic: {
            code: `
              const parent = document.getElementById('parent');
              const lastChild = parent.lastElementChild;
            `,
            explanation: "parent의 마지막 자식 요소 가져오기"
          }
        }
      }
    },
    utilityMethods: {
      cloneNode: {
        description: "노드의 복사본 생성",
        syntax: "node.cloneNode(deep)",
        parameters: {
          deep: {
            type: "boolean",
            description: "깊은 복사 여부",
            default: "false"
          }
        },
        considerations: {
          eventHandlers: "이벤트 핸들러 복사되지 않음",
          ids: "ID 중복 주의",
          references: "참조 관계 재설정 필요"
        },
        examples: {
          basic: {
            code: `
              const original = document.getElementById('original');
              const clone = original.cloneNode(true);
              document.body.appendChild(clone);
            `,
            explanation: "원본 노드의 깊은 복사본을 생성하여 추가"
          }
        }
      },
      contains: {
        description: "특정 노드가 자손인지 확인",
        syntax: "parentNode.contains(childNode)",
        returnValue: "boolean (true/false)",
        usage: "DOM 트리 관계 확인",
        examples: {
          basic: {
            code: `
              const parent = document.getElementById('parent');
              const child = document.getElementById('child');
              const result = parent.contains(child);
            `,
            explanation: "parent가 child의 조상인지 확인"
          }
        }
      }
    },
    performanceConsiderations: {
      reflow: {
        description: "레이아웃 재계산이 필요한 작업",
        triggers: ["DOM 구조 변경", "요소 크기/위치 변경"],
        optimization: {
          batchOperations: "여러 변경 사항 일괄 처리",
          documentFragment: "임시 컨테이너 활용",
          positioning: "absolute/fixed 활용"
        }
      },
      repaint: {
        description: "시각적 변경으로 인한 다시 그리기",
        triggers: ["색상 변경", "가시성 변경"],
        optimization: {
          classChanges: "클래스 전환으로 최적화",
          compositeLayers: "하드웨어 가속 활용"
        }
      }
    },
    browserCompatibility: {
      modernBrowsers: {
        features: "최신 DOM API 지원",
        considerations: "폴리필 필요성 검토"
      },
      legacySupport: {
        issues: ["IE 지원", "구형 브라우저 호환성"],
        solutions: {
          polyfills: "필요한 기능 폴리필 추가",
          fallbacks: "대체 구현 제공"
        }
      }
    }
  },
  
  DOMOffsetProperties: {
    elementDimensions: {
      offsetWidth: {
        definition: "요소의 전체 너비를 픽셀 단위로 반환하는 읽기 전용 속성",
        calculation: {
          components: {
            width: "요소의 CSS width",
            padding: "좌우 패딩 값",
            border: "좌우 테두리 두께",
            scrollbar: "수직 스크롤바가 있는 경우 해당 너비"
          },
          formula: "width + paddingLeft + paddingRight + borderLeft + borderRight + scrollbarWidth",
          example: {
            css: `
              .element {
                width: 100px;
                padding: 10px;
                border: 1px solid black;
              }
            `,
            calculation: "100 + (10 × 2) + (1 × 2) = 122px"
          }
        },
        characteristics: {
          rounding: "정수로 반올림됨",
          updates: "레이아웃 변경 시 자동 업데이트",
          performance: "레이아웃 리플로우 발생 가능"
        }
      },
      offsetHeight: {
        definition: "요소의 전체 높이를 픽셀 단위로 반환하는 읽기 전용 속성",
        calculation: {
          components: {
            height: "요소의 CSS height",
            padding: "상하 패딩 값",
            border: "상하 테두리 두께",
            scrollbar: "수평 스크롤바가 있는 경우 해당 높이"
          },
          formula: "height + paddingTop + paddingBottom + borderTop + borderBottom + scrollbarHeight",
          example: {
            css: `
              .element {
                height: 100px;
                padding: 10px;
                border: 1px solid black;
              }
            `,
            calculation: "100 + (10 × 2) + (1 × 2) = 122px"
          }
        },
        characteristics: {
          visibility: "display: none인 경우 0 반환",
          collapse: "visibility: collapse인 경우 0 반환",
          hidden: "요소가 숨겨진 경우에도 실제 크기 반환"
        }
      }
    },
    positionProperties: {
      offsetLeft: {
        definition: "요소의 좌측 외부 경계와 offsetParent의 좌측 내부 경계 사이의 거리",
        considerations: {
          offsetParent: {
            definition: "가장 가까운 위치 지정된 조상 요소",
            positioning: ["relative", "absolute", "fixed"],
            fallback: "body 요소",
            special: "td, th, table은 offsetParent가 될 수 있음"
          },
          calculation: {
            margin: "마진은 포함되지 않음",
            positioning: "위치 지정 방식에 따라 값이 달라짐",
            scrolling: "스크롤 위치에 영향받지 않음"
          },
          examples: {
            static: "일반 배치 흐름에서의 위치",
            relative: "상대 위치 지정 시의 오프셋",
            absolute: "절대 위치 지정 시의 오프셋"
          }
        }
      },
      offsetTop: {
        definition: "요소의 상단 외부 경계와 offsetParent의 상단 내부 경계 사이의 거리",
        considerations: {
          measurement: {
            reference: "offsetParent 기준 측정",
            units: "픽셀 단위 반환",
            rounding: "정수로 반올림"
          },
          behaviors: {
            scrolling: "페이지 스크롤에 영향받지 않음",
            transforms: "CSS 변환의 영향을 받음",
            positioning: "위치 지정 방식에 따른 변화"
          }
        }
      }
    },
    scrollProperties: {
      scrollWidth: {
        definition: "요소의 전체 스크롤 가능 너비",
        characteristics: {
          overflow: "내용이 넘치는 경우 실제 콘텐츠 너비 포함",
          padding: "패딩 포함",
          border: "테두리 제외",
          calculation: "보이는 영역 + 넘치는 영역"
        }
      },
      scrollHeight: {
        definition: "요소의 전체 스크롤 가능 높이",
        usage: {
          pageHeight: "문서 전체 높이 확인",
          contentSize: "실제 콘텐츠 크기 측정",
          scrollProgress: "스크롤 진행률 계산"
        }
      },
      scrollLeft: {
        definition: "요소의 수평 스크롤 위치",
        characteristics: {
          readable: "현재 스크롤 위치 읽기 가능",
          writable: "스크롤 위치 설정 가능",
          rtl: "RTL 언어에서의 동작 차이"
        }
      },
      scrollTop: {
        definition: "요소의 수직 스크롤 위치",
        applications: {
          scrollTracking: "스크롤 위치 추적",
          smoothScroll: "부드러운 스크롤 구현",
          infiniteScroll: "무한 스크롤 구현"
        }
      }
    },
    clientProperties: {
      clientWidth: {
        definition: "요소의 내부 너비 (패딩 포함, 테두리/스크롤바 제외)",
        calculation: {
          components: ["CSS width", "padding"],
          excludes: ["border", "scrollbar", "margin"]
        }
      },
      clientHeight: {
        definition: "요소의 내부 높이 (패딩 포함, 테두리/스크롤바 제외)",
        usage: {
          viewportSize: "뷰포트 크기 측정",
          contentArea: "콘텐츠 영역 크기 계산",
          layoutCalculations: "레이아웃 계산"
        }
      }
    },
    practicalApplications: {
      elementPositioning: {
        absolutePosition: {
          calculation: {
            method: "offsetLeft/Top 값의 재귀적 합산",
            considerations: ["스크롤 위치", "변환", "뷰포트 위치"]
          },
          example: {
            code: `
              function getAbsolutePosition(element) {
                let left = 0, top = 0;
                while(element) {
                  left += element.offsetLeft - element.scrollLeft;
                  top += element.offsetTop - element.scrollTop;
                  element = element.offsetParent;
                }
                return { left, top };
              }
            `,
            usage: "요소의 절대 위치 계산"
          }
        },
        viewportPosition: {
          calculation: {
            method: "getBoundingClientRect() 사용",
            properties: ["top", "right", "bottom", "left"],
            considerations: ["스크롤 위치", "변환"]
          },
          example: {
            code: `
              const element = document.getElementById('element');
              const rect = element.getBoundingClientRect();
              console.log(rect.top, rect.right, rect.bottom, rect.left);
            `,
            usage: "요소의 뷰포트 기준 위치 확인"
          }
        }
      },
      scrollHandling: {
        infiniteScroll: {
          implementation: {
            detection: "scrollHeight - scrollTop === clientHeight",
            threshold: "로딩 시작 임계값 설정",
            optimization: "스로틀링/디바운싱 적용"
          },
          example: {
            code: `
              window.addEventListener('scroll', () => {
                if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
                  loadMoreContent();
                }
              });
            `,
            explanation: "페이지 하단에 도달 시 추가 콘텐츠 로드"
          }
        },
        scrollProgress: {
          calculation: {
            formula: "(scrollTop / (scrollHeight - clientHeight)) * 100",
            usage: "스크롤 진행률 표시"
          },
          example: {
            code: `
              window.addEventListener('scroll', () => {
                const scrollTop = document.documentElement.scrollTop;
                const scrollHeight = document.documentElement.scrollHeight;
                const clientHeight = document.documentElement.clientHeight;
                const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
                progressBar.style.width = scrollPercent + '%';
              });
            `,
            explanation: "스크롤 진행률에 따라 프로그레스 바 업데이트"
          }
        }
      },
      elementResizing: {
        dimensions: {
          calculation: {
            width: "offsetWidth vs clientWidth 선택",
            height: "offsetHeight vs clientHeight 선택"
          },
          considerations: {
            boxSizing: "box-sizing 속성의 영향",
            scrollbars: "스크롤바 존재 여부",
            borders: "테두리 두께"
          },
          example: {
            code: `
              const element = document.getElementById('element');
              console.log(element.offsetWidth, element.clientWidth);
            `,
            explanation: "요소의 offsetWidth와 clientWidth 비교"
          }
        }
      },
      performanceOptimization: {
        layoutThrashing: {
          problem: "잦은 레이아웃 계산으로 인한 성능 저하",
          solutions: {
            batchReading: "오프셋 값 읽기 일괄 처리",
            caching: "계산된 값 캐싱",
            requestAnimationFrame: "레이아웃 계산 최적화"
          },
          example: {
            code: `
              // 잘못된 예: 반복문 내에서 레이아웃 읽기/쓰기
              for(let i = 0; i < elements.length; i++) {
                elements[i].style.height = elements[i].offsetHeight + 10 + 'px';
              }

              // 최적화된 예: 레이아웃 읽기와 쓰기 분리
              let heights = [];
              for(let i = 0; i < elements.length; i++) {
                heights.push(elements[i].offsetHeight);
              }
              for(let i = 0; i < elements.length; i++) {
                elements[i].style.height = heights[i] + 10 + 'px';
              }
            `,
            explanation: "레이아웃 계산을 일괄 처리하여 성능 최적화"
          }
        },
        bestPractices: {
          measurement: "필요한 경우에만 오프셋 값 측정",
          caching: "자주 사용되는 값 저장",
          alternatives: "가능한 경우 getBoundingClientRect() 사용"
        }
      }
    },
    crossBrowserConsiderations: {
      implementations: {
        differences: {
          rounding: "브라우저별 반올림 처리 차이",
          scrollbar: "스크롤바 처리 방식 차이",
          rtl: "RTL 텍스트 방향에서의 차이"
        },
        solutions: {
          normalization: "값 정규화 함수 사용",
          feature: "기능 감지 및 대체 구현",
          testing: "크로스 브라우저 테스트"
        }
      }
    }
  },
  
  layoutGuide: {
    name: "Web Application Layout Guide",
    description: "ChatGPT, Gemini, VSCode와 유사한 레이아웃을 생성하기 위한 가이드",
    version: "1.0.0",
    sections: [
      {
        id: "header",
        name: "Header",
        description: "애플리케이션 제목, 글로벌 네비게이션, 사용자 설정을 포함",
        components: [
          {
            id: "logo",
            name: "Application Logo",
            type: "image",
            suggestion: "애플리케이션의 로고 또는 이름을 표시."
          },
          {
            id: "main-nav",
            name: "Main Navigation",
            type: "menu",
            suggestion: "애플리케이션의 주요 섹션으로의 링크 (예: Home, About, Contact).",
            items: [
              { id: "nav-home", label: "Home", link: "/" },
              { id: "nav-about", label: "About", link: "/about" },
              { id: "nav-contact", label: "Contact", link: "/contact" }
            ]
          },
          {
            id: "user-menu",
            name: "User Menu",
            type: "dropdown",
            suggestion: "사용자 프로필, 설정, 로그아웃에 접근.",
            items: [
              { id: "user-profile", label: "Profile", link: "/profile" },
              { id: "user-settings", label: "Settings", link: "/settings" },
              { id: "user-logout", label: "Logout", link: "/logout" }
            ]
          }
        ],
        styles: {
          backgroundColor: "#f0f0f0",
          padding: "10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }
      },
      {
        id: "sidebar",
        name: "Sidebar",
        description: "도구, 설정 또는 보조 네비게이션에 빠르게 접근할 수 있도록 제공.",
        components: [
          {
            id: "tool-list",
            name: "Tool List",
            type: "list",
            suggestion: "애플리케이션 내에서 사용할 수 있는 도구의 아이콘 또는 이름.",
            items: [
              { id: "tool-1", label: "Tool 1", icon: "tool1.svg" },
              { id: "tool-2", label: "Tool 2", icon: "tool2.svg" },
              { id: "tool-3", label: "Tool 3", icon: "tool3.svg" }
            ]
          },
          {
            id: "context-menu",
            name: "Contextual Menu",
            type: "menu",
            suggestion: "상황별 액션 또는 설정으로의 링크.",
            items: [
              { id: "context-action-1", label: "Action 1", link: "/action1" },
              { id: "context-setting-1", label: "Setting 1", link: "/setting1" }
            ]
          }
        ],
        styles: {
          width: "250px",
          backgroundColor: "#e0e0e0",
          padding: "10px"
        }
      },
      {
        id: "main-content",
        name: "Main Content Area",
        description: "콘텐츠를 표시하고 애플리케이션과 상호작용하는 주요 영역.",
        components: [
          {
            id: "content-header",
            name: "Content Header",
            type: "header",
            suggestion: "현재 콘텐츠의 제목과 간략한 설명을 포함.",
            styles: {
              marginBottom: "20px"
            }
          },
          {
            id: "content-body",
            name: "Content Body",
            type: "container",
            suggestion: "텍스트, 폼, 인터랙티브 요소 등 주요 콘텐츠를 담음."
          }
        ],
        styles: {
          flexGrow: "1",
          padding: "20px",
          overflowY: "auto"
        }
      },
      {
        id: "chat-input",
        name: "Chat Input Area",
        description: "챗봇과 유사한 애플리케이션에서 사용자 입력을 위한 영역. ChatGPT 및 Gemini와 유사.",
        components: [
          {
            id: "text-input",
            name: "Text Input",
            type: "textarea",
            suggestion: "사용자가 메시지를 입력할 수 있도록 함.",
            placeholder: "Enter your message here..."
          },
          {
            id: "send-button",
            name: "Send Button",
            type: "button",
            suggestion: "사용자의 메시지를 전송.",
            label: "Send"
          }
        ],
        styles: {
          position: "fixed",
          bottom: "0",
          left: "250px", // Assuming sidebar width is 250px
          right: "0",
          padding: "10px",
          backgroundColor: "#f0f0f0",
          borderTop: "1px solid #ccc"
        }
      },
      {
        id: "footer",
        name: "Footer",
        description: "저작권 정보, 법적 문서 링크 및 기타 메타데이터 포함.",
        components: [
          {
            id: "copyright",
            name: "Copyright Notice",
            type: "text",
            suggestion: "저작권 연도 및 소유자를 표시.",
            content: "© 2023 Your Company Name"
          },
          {
            id: "legal-links",
            name: "Legal Links",
            type: "menu",
            suggestion: "서비스 약관, 개인정보 보호정책 등의 링크.",
            items: [
              { id: "terms", label: "Terms of Service", link: "/terms" },
              { id: "privacy", label: "Privacy Policy", link: "/privacy" }
            ]
          }
        ],
        styles: {
          backgroundColor: "#f0f0f0",
          padding: "10px",
          textAlign: "center"
        }
      }
    ],
    globalStyles: {
      fontFamily: "Arial, sans-serif",
      margin: "0",
      padding: "0",
      boxSizing: "border-box"
    }
  },
  
  DOMElementMethods: {
    elementCreation: {
      createElement: {
        description: "새로운 HTML 요소를 생성하는 메서드",
        syntax: "document.createElement(tagName[, options])",
        parameters: {
          tagName: {
            type: "문자열",
            description: "생성할 HTML 요소의 태그 이름",
            examples: ["div", "p", "span", "button"]
          },
          options: {
            type: "객체",
            properties: {
              is: "커스텀 엘리먼트 정의",
              customElements: "웹 컴포넌트 관련 설정"
            }
          }
        },
        usage: {
          basic: {
            code: `const divElement = document.createElement('div');`,
            explanation: "기본적인 div 요소 생성"
          },
          advanced: {
            code: `
              const customButton = document.createElement('button', {
                is: 'custom-button'
              });
            `,
            explanation: "커스텀 엘리먼트로 버튼 생성"
          }
        },
        bestPractices: {
          performance: {
            documentFragment: "여러 요소 생성 시 DocumentFragment 사용",
            batchCreation: "반복문 내 createElement 최소화"
          },
          validation: "올바른 태그 이름 사용 확인",
          compatibility: "브라우저 지원 범위 확인"
        }
      },
      createTextNode: {
        description: "텍스트 노드를 생성하는 메서드",
        syntax: "document.createTextNode(data)",
        usage: {
          basic: `const text = document.createTextNode('Hello World');`,
          withElement: `
            const div = document.createElement('div');
            const text = document.createTextNode('Hello World');
            div.appendChild(text);
          `
        },
        considerations: {
          escaping: "HTML 특수문자 자동 이스케이프",
          whitespace: "공백 문자 보존",
          performance: "textContent 사용 비교 검토"
        }
      }
    },
    elementManipulation: {
      appendChild: {
        description: "노드를 특정 부모 노드의 마지막 자식으로 추가",
        syntax: "parentNode.appendChild(childNode)",
        characteristics: {
          returnValue: "추가된 노드 반환",
          existingNode: "이미 존재하는 노드는 이동됨",
          liveDOM: "실시간 DOM 업데이트"
        },
        examples: {
          basic: {
            code: `
              const parent = document.getElementById('parent');
              const child = document.createElement('div');
              parent.appendChild(child);
            `,
            explanation: "새로운 자식 요소 추가"
          },
          moving: {
            code: `
              const existing = document.getElementById('existing');
              const newParent = document.getElementById('newParent');
              newParent.appendChild(existing);
            `,
            explanation: "기존 요소 이동"
          }
        },
        performance: {
          considerations: ["DOM 리플로우 발생", "레이아웃 계산 필요"],
          optimization: ["DocumentFragment 사용", "일괄 처리"]
        }
      },
      insertBefore: {
        description: "지정된 참조 노드 앞에 노드 삽입",
        syntax: "parentNode.insertBefore(newNode, referenceNode)",
        parameters: {
          newNode: "삽입할 새로운 노드",
          referenceNode: "참조 노드 (null 가능)"
        },
        behaviors: {
          nullReference: "null일 경우 appendChild처럼 동작",
          existingNode: "기존 노드 이동",
          validation: "부모-자식 관계 검증"
        },
        examples: {
          insertion: {
            code: `
              const parent = document.getElementById('parent');
              const newNode = document.createElement('div');
              const referenceNode = document.getElementById('reference');
              parent.insertBefore(newNode, referenceNode);
            `,
            explanation: "참조 노드 앞에 새로운 노드 삽입"
          }
        }
      },
      removeChild: {
        description: "자식 노드 제거",
        syntax: "parentNode.removeChild(childNode)",
        characteristics: {
          returnValue: "제거된 노드 반환",
          memory: "메모리에서 완전히 제거되지 않음",
          reuse: "반환된 노드 재사용 가능"
        },
        examples: {
          basic: {
            code: `
              const parent = document.getElementById('parent');
              const child = document.getElementById('child');
              const removedNode = parent.removeChild(child);
            `,
            explanation: "자식 노드 제거"
          },
          reattachment: {
            code: `
              const removedNode = parent.removeChild(child);
              anotherParent.appendChild(removedNode);
            `,
            explanation: "제거된 노드를 다른 부모에 재첨부"
          }
        }
      },
      replaceChild: {
        description: "기존 자식 노드를 새로운 노드로 교체",
        syntax: "parentNode.replaceChild(newChild, oldChild)",
        characteristics: {
          returnValue: "교체된 이전 노드 반환",
          validation: "부모-자식 관계 확인",
          performance: "단일 DOM 업데이트"
        },
        examples: {
          basic: {
            code: `
              const parent = document.getElementById('parent');
              const newChild = document.createElement('span');
              const oldChild = document.getElementById('oldChild');
              parent.replaceChild(newChild, oldChild);
            `,
            explanation: "기존 노드를 새로운 노드로 교체"
          }
        }
      }
    },
    elementAttributes: {
      setAttribute: {
        description: "요소의 속성 설정",
        syntax: "element.setAttribute(name, value)",
        characteristics: {
          caseInsensitive: "속성 이름 대소문자 구분 없음",
          stringValue: "값이 문자열로 변환됨",
          specialAttributes: {
            class: "className 속성과 동기화",
            id: "요소 식별자로 사용",
            style: "CSS 스타일 지정"
          }
        },
        examples: {
          basic: `element.setAttribute('class', 'highlight');`,
          dataAttribute: `element.setAttribute('data-id', '123');`,
          ariaAttribute: `element.setAttribute('aria-label', '설명');`
        }
      },
      getAttribute: {
        description: "요소의 속성 값 반환",
        syntax: "element.getAttribute(attributeName)",
        returnValues: {
          found: "속성 값 문자열",
          notFound: "null",
          empty: "빈 문자열"
        },
        examples: {
          basic: {
            code: `
              const element = document.getElementById('element');
              const className = element.getAttribute('class');
            `,
            explanation: "class 속성 값 가져오기"
          }
        }
      },
      removeAttribute: {
        description: "요소의 속성 제거",
        syntax: "element.removeAttribute(attributeName)",
        usage: {
          cleanup: "불필요한 속성 제거",
          reset: "기본값으로 재설정",
          toggle: "속성 토글 구현"
        },
        examples: {
          basic: {
            code: `
              const element = document.getElementById('element');
              element.removeAttribute('class');
            `,
            explanation: "class 속성 제거"
          }
        }
      },
      hasAttribute: {
        description: "속성 존재 여부 확인",
        syntax: "element.hasAttribute(attributeName)",
        returnValue: "boolean (true/false)",
        usage: "조건부 로직 구현",
        examples: {
          basic: {
            code: `
              const element = document.getElementById('element');
              if (element.hasAttribute('disabled')) {
                // 비활성화된 상태 처리
              }
            `,
            explanation: "disabled 속성 존재 여부 확인 후 처리"
          }
        }
      }
    },
    elementContent: {
      innerHTML: {
        description: "요소의 HTML 내용을 가져오거나 설정",
        characteristics: {
          parsing: "HTML 파싱 수행",
          security: "XSS 취약점 주의",
          performance: "대규모 변경 시 성능 영향"
        },
        bestPractices: {
          sanitization: "사용자 입력 데이터 정제",
          alternatives: {
            textContent: "순수 텍스트 처리",
            createElement: "동적 요소 생성"
          }
        },
        examples: {
          basic: {
            code: `
              const element = document.getElementById('element');
              element.innerHTML = '<p>새로운 내용</p>';
            `,
            explanation: "innerHTML을 사용하여 새로운 HTML 내용 설정"
          }
        }
      },
      textContent: {
        description: "요소의 텍스트 내용을 가져오거나 설정",
        advantages: {
          security: "HTML 파싱 없음",
          performance: "innerHTML보다 빠름",
          simplicity: "텍스트만 처리"
        },
        comparison: {
          innerText: {
            differences: ["스타일 고려", "성능 차이", "가시성 처리"],
            usage: "화면에 표시되는 텍스트만 필요할 때"
          }
        },
        examples: {
          basic: {
            code: `
              const element = document.getElementById('element');
              element.textContent = '새로운 텍스트 내용';
            `,
            explanation: "textContent를 사용하여 텍스트 내용 설정"
          }
        }
      }
    },
    traversalMethods: {
      parentNode: {
        description: "요소의 부모 노드 반환",
        characteristics: {
          returnValue: "직계 부모 노드",
          nullCase: "최상위 노드의 경우 null"
        },
        examples: {
          basic: {
            code: `
              const child = document.getElementById('child');
              const parent = child.parentNode;
            `,
            explanation: "child 요소의 부모 노드 가져오기"
          }
        }
      },
      children: {
        description: "요소의 자식 요소들을 반환",
        characteristics: {
          liveCollection: "실시간 업데이트",
          elementNodesOnly: "요소 노드만 포함"
        },
        examples: {
          basic: {
            code: `
              const parent = document.getElementById('parent');
              const children = parent.children;
            `,
            explanation: "parent 요소의 자식 요소들 가져오기"
          }
        }
      },
      firstElementChild: {
        description: "첫 번째 자식 요소 반환",
        usage: "첫 번째 자식 요소 조작",
        examples: {
          basic: {
            code: `
              const parent = document.getElementById('parent');
              const firstChild = parent.firstElementChild;
            `,
            explanation: "parent의 첫 번째 자식 요소 가져오기"
          }
        }
      },
      lastElementChild: {
        description: "마지막 자식 요소 반환",
        usage: "마지막 자식 요소 조작",
        examples: {
          basic: {
            code: `
              const parent = document.getElementById('parent');
              const lastChild = parent.lastElementChild;
            `,
            explanation: "parent의 마지막 자식 요소 가져오기"
          }
        }
      }
    },
    utilityMethods: {
      cloneNode: {
        description: "노드의 복사본 생성",
        syntax: "node.cloneNode(deep)",
        parameters: {
          deep: {
            type: "boolean",
            description: "깊은 복사 여부",
            default: "false"
          }
        },
        considerations: {
          eventHandlers: "이벤트 핸들러 복사되지 않음",
          ids: "ID 중복 주의",
          references: "참조 관계 재설정 필요"
        },
        examples: {
          basic: {
            code: `
              const original = document.getElementById('original');
              const clone = original.cloneNode(true);
              document.body.appendChild(clone);
            `,
            explanation: "원본 노드의 깊은 복사본을 생성하여 추가"
          }
        }
      },
      contains: {
        description: "특정 노드가 자손인지 확인",
        syntax: "parentNode.contains(childNode)",
        returnValue: "boolean (true/false)",
        usage: "DOM 트리 관계 확인",
        examples: {
          basic: {
            code: `
              const parent = document.getElementById('parent');
              const child = document.getElementById('child');
              const result = parent.contains(child);
            `,
            explanation: "parent가 child의 조상인지 확인"
          }
        }
      }
    },
    performanceConsiderations: {
      reflow: {
        description: "레이아웃 재계산이 필요한 작업",
        triggers: ["DOM 구조 변경", "요소 크기/위치 변경"],
        optimization: {
          batchOperations: "여러 변경 사항 일괄 처리",
          documentFragment: "임시 컨테이너 활용",
          positioning: "absolute/fixed 활용"
        }
      },
      repaint: {
        description: "시각적 변경으로 인한 다시 그리기",
        triggers: ["색상 변경", "가시성 변경"],
        optimization: {
          classChanges: "클래스 전환으로 최적화",
          compositeLayers: "하드웨어 가속 활용"
        }
      }
    },
    browserCompatibility: {
      modernBrowsers: {
        features: "최신 DOM API 지원",
        considerations: "폴리필 필요성 검토"
      },
      legacySupport: {
        issues: ["IE 지원", "구형 브라우저 호환성"],
        solutions: {
          polyfills: "필요한 기능 폴리필 추가",
          fallbacks: "대체 구현 제공"
        }
      }
    }
  },
  
  practicalApplications: {
    elementPositioning: {
      absolutePosition: {
        calculation: {
          method: "offsetLeft/Top 값의 재귀적 합산",
          considerations: ["스크롤 위치", "변환", "뷰포트 위치"]
        },
        example: {
          code: `
            function getAbsolutePosition(element) {
              let left = 0, top = 0;
              while(element) {
                left += element.offsetLeft - element.scrollLeft;
                top += element.offsetTop - element.scrollTop;
                element = element.offsetParent;
              }
              return { left, top };
            }
          `,
          usage: "요소의 절대 위치 계산"
        }
      },
      viewportPosition: {
        calculation: {
          method: "getBoundingClientRect() 사용",
          properties: ["top", "right", "bottom", "left"],
          considerations: ["스크롤 위치", "변환"]
        },
        example: {
          code: `
            const element = document.getElementById('element');
            const rect = element.getBoundingClientRect();
            console.log(rect.top, rect.right, rect.bottom, rect.left);
          `,
          usage: "요소의 뷰포트 기준 위치 확인"
        }
      }
    },
    scrollHandling: {
      infiniteScroll: {
        implementation: {
          detection: "scrollHeight - scrollTop === clientHeight",
          threshold: "로딩 시작 임계값 설정",
          optimization: "스로틀링/디바운싱 적용"
        },
        example: {
          code: `
            window.addEventListener('scroll', () => {
              if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
                loadMoreContent();
              }
            });
          `,
          explanation: "페이지 하단에 도달 시 추가 콘텐츠 로드"
        }
      },
      scrollProgress: {
        calculation: {
          formula: "(scrollTop / (scrollHeight - clientHeight)) * 100",
          usage: "스크롤 진행률 표시"
        },
        example: {
          code: `
            window.addEventListener('scroll', () => {
              const scrollTop = document.documentElement.scrollTop;
              const scrollHeight = document.documentElement.scrollHeight;
              const clientHeight = document.documentElement.clientHeight;
              const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
              progressBar.style.width = scrollPercent + '%';
            });
          `,
          explanation: "스크롤 진행률에 따라 프로그레스 바 업데이트"
        }
      }
    },
    elementResizing: {
      dimensions: {
        calculation: {
          width: "offsetWidth vs clientWidth 선택",
          height: "offsetHeight vs clientHeight 선택"
        },
        considerations: {
          boxSizing: "box-sizing 속성의 영향",
          scrollbars: "스크롤바 존재 여부",
          borders: "테두리 두께"
        },
        example: {
          code: `
            const element = document.getElementById('element');
            console.log(element.offsetWidth, element.clientWidth);
          `,
          explanation: "요소의 offsetWidth와 clientWidth 비교"
        }
      }
    },
    performanceOptimization: {
      layoutThrashing: {
        problem: "잦은 레이아웃 계산으로 인한 성능 저하",
        solutions: {
          batchReading: "오프셋 값 읽기 일괄 처리",
          caching: "계산된 값 캐싱",
          requestAnimationFrame: "레이아웃 계산 최적화"
        },
        example: {
          code: `
            // 잘못된 예: 반복문 내에서 레이아웃 읽기/쓰기
            for(let i = 0; i < elements.length; i++) {
              elements[i].style.height = elements[i].offsetHeight + 10 + 'px';
            }

            // 최적화된 예: 레이아웃 읽기와 쓰기 분리
            let heights = [];
            for(let i = 0; i < elements.length; i++) {
              heights.push(elements[i].offsetHeight);
            }
            for(let i = 0; i < elements.length; i++) {
              elements[i].style.height = heights[i] + 10 + 'px';
            }
          `,
          explanation: "레이아웃 계산을 일괄 처리하여 성능 최적화"
        }
      },
      bestPractices: {
        measurement: "필요한 경우에만 오프셋 값 측정",
        caching: "자주 사용되는 값 저장",
        alternatives: "가능한 경우 getBoundingClientRect() 사용"
      }
    }
  }
};


// const newKeys = Object.keys(comprehensiveWebDevGuide)
// const newValues = Object.values(comprehensiveWebDevGuide)

// console.log(newKeys)
// console.log(newValues)




// 키값찾기

// for(let key in comprehensiveWebDevGuide){
  
//   console.log(key, comprehensiveWebDevGuide[key])
//   const firstKey = key
//   for(let secondKey in firstKey){
//     console.lof(secondKey, firstKey[secondKey])
//   }

  
// } 


// 벨류값 찾기 

// for( let value in comprehensiveWebDevGuide){
  //   console.log(value, comprehensiveWebDevGuide[value])
  // }
  
  
  // 객체를 배열로 변환
  
  const arrCompre = Object.entries(comprehensiveWebDevGuide)

  // [키: 벨류]  === comprehesiveWebDevGuide
  
  
  
  console.log(arrCompre)
  
  // 배열의 값을 출력해봄
  

  let obj = {}
  let arr = []

  const indexOfcompre = arrCompre.forEach(value =>{
    console.log(value)
    // if(value === obj){
    //   Object.entries(value)
    // }

  })

  //for in === 객체에만 사용 가능 
  // forEach() === 배열에만 가능 


  // 각 요소에 대한 데이터를 각각 받아와서 출력
  
  

// for(let value in comprehensiveWebDevGuide){
//     console.log(Object.entries())
// }

// const jsonString = JSON.stringify(comprehensiveWebDevGuide, null, 5);


// console.log(jsonString)





// console.log(comprehensiveWebDevGuide)



