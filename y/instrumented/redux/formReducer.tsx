function cov_2ikxu72ri9() {
  var path = "C:\\Users\\Alisa\\OneDrive\\Desktop\\SSR\\React\\y\\src\\redux\\formReducer.tsx";
  var hash = "7dd5b5c3f17a0406932d2002c1c3ebff3e1af1ea";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Alisa\\OneDrive\\Desktop\\SSR\\React\\y\\src\\redux\\formReducer.tsx",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 37
        },
        end: {
          line: 6,
          column: 1
        }
      },
      "1": {
        start: {
          line: 8,
          column: 27
        },
        end: {
          line: 19,
          column: 2
        }
      },
      "2": {
        start: {
          line: 13,
          column: 6
        },
        end: {
          line: 16,
          column: 8
        }
      },
      "3": {
        start: {
          line: 21,
          column: 31
        },
        end: {
          line: 21,
          column: 50
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 12,
            column: 17
          },
          end: {
            line: 12,
            column: 18
          }
        },
        loc: {
          start: {
            line: 12,
            column: 53
          },
          end: {
            line: 17,
            column: 5
          }
        },
        line: 12
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "7dd5b5c3f17a0406932d2002c1c3ebff3e1af1ea"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2ikxu72ri9 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2ikxu72ri9();
import { createSlice } from '@reduxjs/toolkit';
import { IFormCardAction, IFormCardState } from '../types/types';
const initialState: IFormCardState = (cov_2ikxu72ri9().s[0]++, {
  formCards: []
});
export const formReducer = (cov_2ikxu72ri9().s[1]++, createSlice({
  name: 'formCards',
  initialState,
  reducers: {
    setFormCard: (state, action: IFormCardAction) => {
      cov_2ikxu72ri9().f[0]++;
      cov_2ikxu72ri9().s[2]++;
      return {
        ...state,
        formCards: [...state.formCards, action.payload]
      };
    }
  }
}));
export const {
  setFormCard
} = (cov_2ikxu72ri9().s[3]++, formReducer.actions);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMmlreHU3MnJpOSIsImFjdHVhbENvdmVyYWdlIiwiY3JlYXRlU2xpY2UiLCJJRm9ybUNhcmRBY3Rpb24iLCJJRm9ybUNhcmRTdGF0ZSIsImluaXRpYWxTdGF0ZSIsInMiLCJmb3JtQ2FyZHMiLCJmb3JtUmVkdWNlciIsIm5hbWUiLCJyZWR1Y2VycyIsInNldEZvcm1DYXJkIiwic3RhdGUiLCJhY3Rpb24iLCJmIiwicGF5bG9hZCIsImFjdGlvbnMiXSwic291cmNlcyI6WyJmb3JtUmVkdWNlci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuaW1wb3J0IHsgSUZvcm1DYXJkQWN0aW9uLCBJRm9ybUNhcmRTdGF0ZSB9IGZyb20gJy4uL3R5cGVzL3R5cGVzJztcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogSUZvcm1DYXJkU3RhdGUgPSB7XHJcbiAgZm9ybUNhcmRzOiBbXSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmb3JtUmVkdWNlciA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiAnZm9ybUNhcmRzJyxcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIHNldEZvcm1DYXJkOiAoc3RhdGUsIGFjdGlvbjogSUZvcm1DYXJkQWN0aW9uKSA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgZm9ybUNhcmRzOiBbLi4uc3RhdGUuZm9ybUNhcmRzLCBhY3Rpb24ucGF5bG9hZF0sXHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHsgc2V0Rm9ybUNhcmQgfSA9IGZvcm1SZWR1Y2VyLmFjdGlvbnM7XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFlWTtJQUFBQSxjQUFBLFlBQUFBLENBQUE7TUFBQSxPQUFBQyxjQUFBO0lBQUE7RUFBQTtFQUFBLE9BQUFBLGNBQUE7QUFBQTtBQUFBRCxjQUFBO0FBZlosU0FBU0UsV0FBVyxRQUFRLGtCQUFrQjtBQUM5QyxTQUFTQyxlQUFlLEVBQUVDLGNBQWMsUUFBUSxnQkFBZ0I7QUFFaEUsTUFBTUMsWUFBWSxFQUFFRCxjQUFjLElBQUFKLGNBQUEsR0FBQU0sQ0FBQSxPQUFHO0VBQ25DQyxTQUFTLEVBQUU7QUFDYixDQUFDO0FBRUQsT0FBTyxNQUFNQyxXQUFXLElBQUFSLGNBQUEsR0FBQU0sQ0FBQSxPQUFHSixXQUFXLENBQUM7RUFDckNPLElBQUksRUFBRSxXQUFXO0VBQ2pCSixZQUFZO0VBQ1pLLFFBQVEsRUFBRTtJQUNSQyxXQUFXLEVBQUVBLENBQUNDLEtBQUssRUFBRUMsTUFBTSxFQUFFVixlQUFlLEtBQUs7TUFBQUgsY0FBQSxHQUFBYyxDQUFBO01BQUFkLGNBQUEsR0FBQU0sQ0FBQTtNQUMvQyxPQUFPO1FBQ0wsR0FBR00sS0FBSztRQUNSTCxTQUFTLEVBQUUsQ0FBQyxHQUFHSyxLQUFLLENBQUNMLFNBQVMsRUFBRU0sTUFBTSxDQUFDRSxPQUFPO01BQ2hELENBQUM7SUFDSDtFQUNGO0FBQ0YsQ0FBQyxDQUFDO0FBRUYsT0FBTyxNQUFNO0VBQUVKO0FBQVksQ0FBQyxJQUFBWCxjQUFBLEdBQUFNLENBQUEsT0FBR0UsV0FBVyxDQUFDUSxPQUFPIn0=