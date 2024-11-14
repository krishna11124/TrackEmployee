import { StyleSheet } from "react-native";
import { Colors, Typography } from "../../../constant";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "../../../constant/dimentions";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARY[300],
  },
  informationContainer: {
    margin: hp(2),
    flex: 1,
  },

  actionButton: {
    alignSelf: "center",
    marginBottom: hp(2),
  },
  countinueButton: {
    marginTop: hp(3),
    width: wp(100),
  },
});

export default styles;
