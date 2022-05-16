import AsyncStorage from '@react-native-async-storage/async-storage';

export const _storeData = async (data) => {
    try {
        const jsonValue = JSON.stringify(data)
        await AsyncStorage.setItem(
            '@userData',  jsonValue
        );
    } catch (error) {
        // Error saving data
        error
    }
};


export const _retrieveData = async (data) => {
    try {
        
        const value = await AsyncStorage.getItem('userData');
        if (value !== null) {
            // We have data!!
            console.log("value = ",value);
        }
    } catch (error) {
        // Error retrieving data
        error
    }
};


//static getItem(key: string, [callback]: ?(error: ?Error, result: ?string) => void)

//static setItem(key: string, value: string, [callback]: ?(error: ?Error) => void)

//static removeItem(key: string, [callback]: ?(error: ?Error) => void)

//static mergeItem(key: string, value: string, [callback]: ?(error: ?Error) => void)

//static getAllKeys([callback]: ?(error: ?Error, keys: ?Array<string>) => void)

//static multiGet(keys: Array<string>, [callback]: ?(errors: ?Array<Error>, result: ?Array<Array<string>>) => void)







//let UID123_object = {
 //   name: 'Chris',
 //   age: 30,
 //   traits: { hair: 'brown', eyes: 'brown' }
 // };
  // You only need to define what will be added or updated
 // let UID123_delta = {
 //   age: 31,
 //   traits: { eyes: 'blue', shoe_size: 10 }
 // };
  
  //AsyncStorage.setItem(
  //  'UID123',
  //  JSON.stringify(UID123_object),
  //  () => {
  //    AsyncStorage.mergeItem(
  //      'UID123',
  //      JSON.stringify(UID123_delta),
  //      () => {
  //        AsyncStorage.getItem('UID123', (err, result) => {
  //          console.log(result);
  //        });
  //      }
   //   );
  //  }
  //);
  
  // Console log result:
  // => {'name':'Chris','age':31,'traits':
  //    {'shoe_size':10,'hair':'brown','eyes':'blue'}}