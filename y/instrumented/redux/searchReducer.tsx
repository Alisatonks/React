function cov_osfkudetr() {
  var path = "C:\\Users\\Alisa\\OneDrive\\Desktop\\SSR\\React\\y\\src\\redux\\searchReducer.tsx";
  var hash = "32c02679507296cb6dac0b0e5dcfd8bfe7fb5968";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Alisa\\OneDrive\\Desktop\\SSR\\React\\y\\src\\redux\\searchReducer.tsx",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 29
        },
        end: {
          line: 11,
          column: 2
        }
      },
      "1": {
        start: {
          line: 8,
          column: 6
        },
        end: {
          line: 8,
          column: 28
        }
      },
      "2": {
        start: {
          line: 13,
          column: 33
        },
        end: {
          line: 13,
          column: 54
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 7,
            column: 19
          },
          end: {
            line: 7,
            column: 20
          }
        },
        loc: {
          start: {
            line: 7,
            column: 38
          },
          end: {
            line: 9,
            column: 5
          }
        },
        line: 7
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "32c02679507296cb6dac0b0e5dcfd8bfe7fb5968"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_osfkudetr = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_osfkudetr();
import { createSlice } from '@reduxjs/toolkit';
export const searchReducer = (cov_osfkudetr().s[0]++, createSlice({
  name: 'search',
  initialState: '',
  reducers: {
    setInputValue: (state, action) => {
      cov_osfkudetr().f[0]++;
      cov_osfkudetr().s[1]++;
      return action.payload;
    }
  }
}));
export const {
  setInputValue
} = (cov_osfkudetr().s[2]++, searchReducer.actions);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3Zfb3Nma3VkZXRyIiwiYWN0dWFsQ292ZXJhZ2UiLCJjcmVhdGVTbGljZSIsInNlYXJjaFJlZHVjZXIiLCJzIiwibmFtZSIsImluaXRpYWxTdGF0ZSIsInJlZHVjZXJzIiwic2V0SW5wdXRWYWx1ZSIsInN0YXRlIiwiYWN0aW9uIiwiZiIsInBheWxvYWQiLCJhY3Rpb25zIl0sInNvdXJjZXMiOlsic2VhcmNoUmVkdWNlci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuXHJcbmV4cG9ydCBjb25zdCBzZWFyY2hSZWR1Y2VyID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6ICdzZWFyY2gnLFxyXG4gIGluaXRpYWxTdGF0ZTogJycsXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIHNldElucHV0VmFsdWU6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZDtcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgeyBzZXRJbnB1dFZhbHVlIH0gPSBzZWFyY2hSZWR1Y2VyLmFjdGlvbnM7XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZVk7SUFBQUEsYUFBQSxZQUFBQSxDQUFBO01BQUEsT0FBQUMsY0FBQTtJQUFBO0VBQUE7RUFBQSxPQUFBQSxjQUFBO0FBQUE7QUFBQUQsYUFBQTtBQWZaLFNBQVNFLFdBQVcsUUFBUSxrQkFBa0I7QUFFOUMsT0FBTyxNQUFNQyxhQUFhLElBQUFILGFBQUEsR0FBQUksQ0FBQSxPQUFHRixXQUFXLENBQUM7RUFDdkNHLElBQUksRUFBRSxRQUFRO0VBQ2RDLFlBQVksRUFBRSxFQUFFO0VBQ2hCQyxRQUFRLEVBQUU7SUFDUkMsYUFBYSxFQUFFQSxDQUFDQyxLQUFLLEVBQUVDLE1BQU0sS0FBSztNQUFBVixhQUFBLEdBQUFXLENBQUE7TUFBQVgsYUFBQSxHQUFBSSxDQUFBO01BQ2hDLE9BQU9NLE1BQU0sQ0FBQ0UsT0FBTztJQUN2QjtFQUNGO0FBQ0YsQ0FBQyxDQUFDO0FBRUYsT0FBTyxNQUFNO0VBQUVKO0FBQWMsQ0FBQyxJQUFBUixhQUFBLEdBQUFJLENBQUEsT0FBR0QsYUFBYSxDQUFDVSxPQUFPIn0=