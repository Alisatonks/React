function cov_1rc2mt6mky() {
  var path = "C:\\Users\\Alisa\\OneDrive\\Desktop\\SSR\\React\\y\\src\\redux\\apiSlice.tsx";
  var hash = "3c1747a34e1b02fe9cd1250a0d0c301af1c7675d";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Alisa\\OneDrive\\Desktop\\SSR\\React\\y\\src\\redux\\apiSlice.tsx",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 24
        },
        end: {
          line: 14,
          column: 2
        }
      },
      "1": {
        start: {
          line: 6,
          column: 25
        },
        end: {
          line: 13,
          column: 3
        }
      },
      "2": {
        start: {
          line: 8,
          column: 21
        },
        end: {
          line: 8,
          column: 38
        }
      },
      "3": {
        start: {
          line: 11,
          column: 23
        },
        end: {
          line: 11,
          column: 48
        }
      },
      "4": {
        start: {
          line: 16,
          column: 68
        },
        end: {
          line: 16,
          column: 76
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 6,
            column: 13
          },
          end: {
            line: 6,
            column: 14
          }
        },
        loc: {
          start: {
            line: 6,
            column: 25
          },
          end: {
            line: 13,
            column: 3
          }
        },
        line: 6
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 8,
            column: 13
          },
          end: {
            line: 8,
            column: 14
          }
        },
        loc: {
          start: {
            line: 8,
            column: 21
          },
          end: {
            line: 8,
            column: 38
          }
        },
        line: 8
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 11,
            column: 13
          },
          end: {
            line: 11,
            column: 14
          }
        },
        loc: {
          start: {
            line: 11,
            column: 23
          },
          end: {
            line: 11,
            column: 48
          }
        },
        line: 11
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "3c1747a34e1b02fe9cd1250a0d0c301af1c7675d"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1rc2mt6mky = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1rc2mt6mky();
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const apiSlice = (cov_1rc2mt6mky().s[0]++, createApi({
  reducerPath: 'characters',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/api/'
  }),
  endpoints: build => {
    cov_1rc2mt6mky().f[0]++;
    cov_1rc2mt6mky().s[1]++;
    return {
      getSingleCharacter: build.query({
        query: id => {
          cov_1rc2mt6mky().f[1]++;
          cov_1rc2mt6mky().s[2]++;
          return `character/${id}`;
        }
      }),
      getCharacter: build.query({
        query: name => {
          cov_1rc2mt6mky().f[2]++;
          cov_1rc2mt6mky().s[3]++;
          return `character/?name=${name}`;
        }
      })
    };
  }
}));
export const {
  useGetSingleCharacterQuery,
  useGetCharacterQuery
} = (cov_1rc2mt6mky().s[4]++, apiSlice);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMXJjMm10Nm1reSIsImFjdHVhbENvdmVyYWdlIiwiY3JlYXRlQXBpIiwiZmV0Y2hCYXNlUXVlcnkiLCJhcGlTbGljZSIsInMiLCJyZWR1Y2VyUGF0aCIsImJhc2VRdWVyeSIsImJhc2VVcmwiLCJlbmRwb2ludHMiLCJidWlsZCIsImYiLCJnZXRTaW5nbGVDaGFyYWN0ZXIiLCJxdWVyeSIsImlkIiwiZ2V0Q2hhcmFjdGVyIiwibmFtZSIsInVzZUdldFNpbmdsZUNoYXJhY3RlclF1ZXJ5IiwidXNlR2V0Q2hhcmFjdGVyUXVlcnkiXSwic291cmNlcyI6WyJhcGlTbGljZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQXBpLCBmZXRjaEJhc2VRdWVyeSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQvcXVlcnkvcmVhY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFwaVNsaWNlID0gY3JlYXRlQXBpKHtcclxuICByZWR1Y2VyUGF0aDogJ2NoYXJhY3RlcnMnLFxyXG4gIGJhc2VRdWVyeTogZmV0Y2hCYXNlUXVlcnkoeyBiYXNlVXJsOiAnaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS8nIH0pLFxyXG4gIGVuZHBvaW50czogKGJ1aWxkKSA9PiAoe1xyXG4gICAgZ2V0U2luZ2xlQ2hhcmFjdGVyOiBidWlsZC5xdWVyeSh7XHJcbiAgICAgIHF1ZXJ5OiAoaWQpID0+IGBjaGFyYWN0ZXIvJHtpZH1gLFxyXG4gICAgfSksXHJcbiAgICBnZXRDaGFyYWN0ZXI6IGJ1aWxkLnF1ZXJ5KHtcclxuICAgICAgcXVlcnk6IChuYW1lKSA9PiBgY2hhcmFjdGVyLz9uYW1lPSR7bmFtZX1gLFxyXG4gICAgfSksXHJcbiAgfSksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHsgdXNlR2V0U2luZ2xlQ2hhcmFjdGVyUXVlcnksIHVzZUdldENoYXJhY3RlclF1ZXJ5IH0gPSBhcGlTbGljZTtcclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFlWTtJQUFBQSxjQUFBLFlBQUFBLENBQUE7TUFBQSxPQUFBQyxjQUFBO0lBQUE7RUFBQTtFQUFBLE9BQUFBLGNBQUE7QUFBQTtBQUFBRCxjQUFBO0FBZlosU0FBU0UsU0FBUyxFQUFFQyxjQUFjLFFBQVEsOEJBQThCO0FBRXhFLE9BQU8sTUFBTUMsUUFBUSxJQUFBSixjQUFBLEdBQUFLLENBQUEsT0FBR0gsU0FBUyxDQUFDO0VBQ2hDSSxXQUFXLEVBQUUsWUFBWTtFQUN6QkMsU0FBUyxFQUFFSixjQUFjLENBQUM7SUFBRUssT0FBTyxFQUFFO0VBQW1DLENBQUMsQ0FBQztFQUMxRUMsU0FBUyxFQUFHQyxLQUFLLElBQU07SUFBQVYsY0FBQSxHQUFBVyxDQUFBO0lBQUFYLGNBQUEsR0FBQUssQ0FBQTtJQUFBO01BQ3JCTyxrQkFBa0IsRUFBRUYsS0FBSyxDQUFDRyxLQUFLLENBQUM7UUFDOUJBLEtBQUssRUFBR0MsRUFBRSxJQUFLO1VBQUFkLGNBQUEsR0FBQVcsQ0FBQTtVQUFBWCxjQUFBLEdBQUFLLENBQUE7VUFBQSxPQUFDLGFBQVlTLEVBQUcsRUFBQztRQUFEO01BQ2pDLENBQUMsQ0FBQztNQUNGQyxZQUFZLEVBQUVMLEtBQUssQ0FBQ0csS0FBSyxDQUFDO1FBQ3hCQSxLQUFLLEVBQUdHLElBQUksSUFBSztVQUFBaEIsY0FBQSxHQUFBVyxDQUFBO1VBQUFYLGNBQUEsR0FBQUssQ0FBQTtVQUFBLE9BQUMsbUJBQWtCVyxJQUFLLEVBQUM7UUFBRDtNQUMzQyxDQUFDO0lBQ0gsQ0FBQztFQUFEO0FBQ0YsQ0FBQyxDQUFDO0FBRUYsT0FBTyxNQUFNO0VBQUVDLDBCQUEwQjtFQUFFQztBQUFxQixDQUFDLElBQUFsQixjQUFBLEdBQUFLLENBQUEsT0FBR0QsUUFBUSJ9