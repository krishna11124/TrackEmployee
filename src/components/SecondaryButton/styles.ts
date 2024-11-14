import { StyleSheet } from "react-native";
import { Colors, Fonts, Typography } from "../../constant";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "../../constant/dimentions";

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 50,
    paddingVertical: 12,
    width: "90%",
    borderColor: Colors.FLOATINGINPUT[100],
    borderWidth: 1,
    flexDirection: "row",
    alignSelf: "center",
    backgroundColor: Colors.PRIMARY[300],
  },

  buttonView: {
    alignItems: "center",
    flexDirection: "row",
  },
  buttonText: {
    color: Colors.PRIMARY[400],
    fontSize: wp(4),
    marginLeft: hp(1),
    marginRight: hp(1),
    fontFamily: Fonts.Regular,
    lineHeight: 24,
  },

  touchableOpacityStyle: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: "100%",
  },
});

export default styles;
