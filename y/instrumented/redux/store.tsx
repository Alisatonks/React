function cov_1fr8xzwpt9() {
  var path = "C:\\Users\\Alisa\\OneDrive\\Desktop\\SSR\\React\\y\\src\\redux\\store.tsx";
  var hash = "b1691615f374b09f40d1f5812bf2c4274d7e4c6a";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Alisa\\OneDrive\\Desktop\\SSR\\React\\y\\src\\redux\\store.tsx",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 20
        },
        end: {
          line: 11,
          column: 2
        }
      },
      "1": {
        start: {
          line: 13,
          column: 14
        },
        end: {
          line: 17,
          column: 2
        }
      },
      "2": {
        start: {
          line: 16,
          column: 4
        },
        end: {
          line: 16,
          column: 54
        }
      },
      "3": {
        start: {
          line: 19,
          column: 0
        },
        end: {
          line: 19,
          column: 31
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 15,
            column: 14
          },
          end: {
            line: 15,
            column: 15
          }
        },
        loc: {
          start: {
            line: 16,
            column: 4
          },
          end: {
            line: 16,
            column: 54
          }
        },
        line: 16
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
    hash: "b1691615f374b09f40d1f5812bf2c4274d7e4c6a"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1fr8xzwpt9 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1fr8xzwpt9();
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { formReducer } from './formReducer';
import { searchReducer } from './searchReducer';
import { apiSlice } from './apiSlice';
const rootReducer = (cov_1fr8xzwpt9().s[0]++, combineReducers({
  formCards: formReducer.reducer,
  search: searchReducer.reducer,
  characters: apiSlice.reducer
}));
const store = (cov_1fr8xzwpt9().s[1]++, configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => {
    cov_1fr8xzwpt9().f[0]++;
    cov_1fr8xzwpt9().s[2]++;
    return getDefaultMiddleware().concat(apiSlice.middleware);
  }
}));
cov_1fr8xzwpt9().s[3]++;
setupListeners(store.dispatch);
export default store;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMWZyOHh6d3B0OSIsImFjdHVhbENvdmVyYWdlIiwiY29uZmlndXJlU3RvcmUiLCJjb21iaW5lUmVkdWNlcnMiLCJzZXR1cExpc3RlbmVycyIsImZvcm1SZWR1Y2VyIiwic2VhcmNoUmVkdWNlciIsImFwaVNsaWNlIiwicm9vdFJlZHVjZXIiLCJzIiwiZm9ybUNhcmRzIiwicmVkdWNlciIsInNlYXJjaCIsImNoYXJhY3RlcnMiLCJzdG9yZSIsIm1pZGRsZXdhcmUiLCJnZXREZWZhdWx0TWlkZGxld2FyZSIsImYiLCJjb25jYXQiLCJkaXNwYXRjaCJdLCJzb3VyY2VzIjpbInN0b3JlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25maWd1cmVTdG9yZSwgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcbmltcG9ydCB7IHNldHVwTGlzdGVuZXJzIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdC9kaXN0L3F1ZXJ5JztcclxuaW1wb3J0IHsgZm9ybVJlZHVjZXIgfSBmcm9tICcuL2Zvcm1SZWR1Y2VyJztcclxuaW1wb3J0IHsgc2VhcmNoUmVkdWNlciB9IGZyb20gJy4vc2VhcmNoUmVkdWNlcic7XHJcbmltcG9ydCB7IGFwaVNsaWNlIH0gZnJvbSAnLi9hcGlTbGljZSc7XHJcblxyXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgZm9ybUNhcmRzOiBmb3JtUmVkdWNlci5yZWR1Y2VyLFxyXG4gIHNlYXJjaDogc2VhcmNoUmVkdWNlci5yZWR1Y2VyLFxyXG4gIGNoYXJhY3RlcnM6IGFwaVNsaWNlLnJlZHVjZXIsXHJcbn0pO1xyXG5cclxuY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSh7XHJcbiAgcmVkdWNlcjogcm9vdFJlZHVjZXIsXHJcbiAgbWlkZGxld2FyZTogKGdldERlZmF1bHRNaWRkbGV3YXJlKSA9PlxyXG4gICAgZ2V0RGVmYXVsdE1pZGRsZXdhcmUoKS5jb25jYXQoYXBpU2xpY2UubWlkZGxld2FyZSksXHJcbn0pO1xyXG5cclxuc2V0dXBMaXN0ZW5lcnMoc3RvcmUuZGlzcGF0Y2gpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFlWTtJQUFBQSxjQUFBLFlBQUFBLENBQUE7TUFBQSxPQUFBQyxjQUFBO0lBQUE7RUFBQTtFQUFBLE9BQUFBLGNBQUE7QUFBQTtBQUFBRCxjQUFBO0FBZlosU0FBU0UsY0FBYyxFQUFFQyxlQUFlLFFBQVEsa0JBQWtCO0FBQ2xFLFNBQVNDLGNBQWMsUUFBUSw2QkFBNkI7QUFDNUQsU0FBU0MsV0FBVyxRQUFRLGVBQWU7QUFDM0MsU0FBU0MsYUFBYSxRQUFRLGlCQUFpQjtBQUMvQyxTQUFTQyxRQUFRLFFBQVEsWUFBWTtBQUVyQyxNQUFNQyxXQUFXLElBQUFSLGNBQUEsR0FBQVMsQ0FBQSxPQUFHTixlQUFlLENBQUM7RUFDbENPLFNBQVMsRUFBRUwsV0FBVyxDQUFDTSxPQUFPO0VBQzlCQyxNQUFNLEVBQUVOLGFBQWEsQ0FBQ0ssT0FBTztFQUM3QkUsVUFBVSxFQUFFTixRQUFRLENBQUNJO0FBQ3ZCLENBQUMsQ0FBQztBQUVGLE1BQU1HLEtBQUssSUFBQWQsY0FBQSxHQUFBUyxDQUFBLE9BQUdQLGNBQWMsQ0FBQztFQUMzQlMsT0FBTyxFQUFFSCxXQUFXO0VBQ3BCTyxVQUFVLEVBQUdDLG9CQUFvQixJQUMvQjtJQUFBaEIsY0FBQSxHQUFBaUIsQ0FBQTtJQUFBakIsY0FBQSxHQUFBUyxDQUFBO0lBQUEsT0FBQU8sb0JBQW9CLENBQUMsQ0FBQyxDQUFDRSxNQUFNLENBQUNYLFFBQVEsQ0FBQ1EsVUFBVSxDQUFDO0VBQUQ7QUFDckQsQ0FBQyxDQUFDO0FBQUNmLGNBQUEsR0FBQVMsQ0FBQTtBQUVITCxjQUFjLENBQUNVLEtBQUssQ0FBQ0ssUUFBUSxDQUFDO0FBRTlCLGVBQWVMLEtBQUsifQ==