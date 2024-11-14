import { StyleSheet } from "react-native";
import { Colors, Fonts, Typography } from "../../../constant";
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
    flex: 1,
    margin: hp(1),
  },
  inputView: {
    marginTop: hp(3),
  },
  input: {
    borderWidth: 0.5,
    width: wp(90),
    borderRadius: 5,
    marginBottom: hp(2),
    marginTop: hp(1),
    paddingLeft: hp(2),
    borderColor: Colors.FLOATINGINPUT[100],
    fontFamily: Fonts.Medium,
    fontSize: wp(3.7),
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
