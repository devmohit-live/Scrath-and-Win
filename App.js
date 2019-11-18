import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Alert,
  Modal,
  Image
} from "react-native";
import { Button } from "native-base";
import { FontAwesome } from "@expo/vector-icons";

var ar = new Array(25).fill("empty");
var count = 0,
  temp = 0;
alt = 0;
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomNumber: "",
      isScratched: false,
      modalVisible: false
    };
  }

  componentDidMount() {
    this.setState({ randomNumber: this.genRandomNum() });
  }

  setModalVisible = visible => {
    this.setState({ modalVisible: visible });
  };

  genRandomNum = () => {
    // let num = Math.floor(Math.random() * 25);
    let num = 2;

    this.setState({ randomNumber: num, isScratched: true });
    return num;
  };

  countCheck = () => {
    if (count >= 5) {
      if (alt == 0) {
        Alert.alert("Out of Moves!!");
        alt = 1; //tem variable to show alert one time only
      }
      return "none";
    } else if (temp == 1) {
      return "none";
    } else {
      return "auto";
    }
  };

  scratch = itemNum => {
    count++;
    this.countCheck();
    if (itemNum === this.state.randomNumber) {
      ar[itemNum] = "lucky";
      // Alert.alert("Congratulation!! You won.");
      this.setModalVisible(true);
      temp = 1;
    } else {
      ar[itemNum] = "unlucky";
    }
    this.forceUpdate();
  };

  scratchItemIcon = itemNum => {
    if (ar[itemNum] === "lucky") {
      return "dollar";
    } else if (ar[itemNum] === "unlucky") {
      return "frown-o";
    } else {
      return "circle";
    }
  };

  findRightColor = itemNum => {
    if (ar[itemNum] === "lucky") {
      return "green";
    } else if (ar[itemNum] === "unlucky") {
      return "red";
    } else {
      return "black";
    }
  };

  showAllItem = () => {
    ar.fill("unlucky");
    ar[this.state.randomNumber] = "lucky";
    this.setModalVisible(false);
    this.forceUpdate();
  };

  resetGame = () => {
    count = 0;
    alt = 0;
    temp = 0;
    this.setState({ randomNumber: this.genRandomNum() }, () => {
      ar.fill("empty");
      this.setModalVisible(false);
      this.forceUpdate();
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
          <Text style={styles.topText}>Scrath and Win !!</Text>
        </View>
        <View style={styles.grid} pointerEvents={this.countCheck()}>
          <View style={styles.itemRow}>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratch(0);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(0)}
                size={50}
                color={this.findRightColor(0)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratch(1);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(1)}
                size={50}
                color={this.findRightColor(1)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratch(2);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(2)}
                size={50}
                color={this.findRightColor(2)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratch(3);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(3)}
                size={50}
                color={this.findRightColor(3)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratch(4);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(4)}
                size={50}
                color={this.findRightColor(4)}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.itemRow}>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratch(5);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(5)}
                size={50}
                color={this.findRightColor(5)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratch(6);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(6)}
                size={50}
                color={this.findRightColor(6)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratch(7);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(7)}
                size={50}
                color={this.findRightColor(7)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratch(8);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(8)}
                size={50}
                color={this.findRightColor(8)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratch(9);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(9)}
                size={50}
                color={this.findRightColor(9)}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.itemRow}>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratch(10);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(10)}
                size={50}
                color={this.findRightColor(10)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratch(11);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(11)}
                size={50}
                color={this.findRightColor(11)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratch(12);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(12)}
                size={50}
                color={this.findRightColor(12)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratch(13);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(13)}
                size={50}
                color={this.findRightColor(13)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratch(14);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(14)}
                size={50}
                color={this.findRightColor(14)}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.itemRow}>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratch(15);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(15)}
                size={50}
                color={this.findRightColor(15)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratch(16);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(16)}
                size={50}
                color={this.findRightColor(16)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratch(17);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(17)}
                size={50}
                color={this.findRightColor(17)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratch(18);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(18)}
                size={50}
                color={this.findRightColor(18)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratch(19);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(19)}
                size={50}
                color={this.findRightColor(19)}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.itemRow}>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratch(20);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(20)}
                size={50}
                color={this.findRightColor(20)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratch(21);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(21)}
                size={50}
                color={this.findRightColor(21)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratch(22);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(22)}
                size={50}
                color={this.findRightColor(22)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratch(23);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(23)}
                size={50}
                color={this.findRightColor(23)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratch(24);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(24)}
                size={50}
                color={this.findRightColor(24)}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Button
          onPress={() => {
            this.showAllItem();
          }}
          full
          success
          style={styles.btn}
        >
          <Text style={styles.btnText}>Show All Coupons</Text>
        </Button>
        <Button
          onPress={() => {
            this.resetGame();
          }}
          full
          danger
          style={styles.btn}
        >
          <Text style={styles.btnText}>Reset Game</Text>
        </Button>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
        >
          <View
            style={{
              flex: 1,
              alignContent: "center",
              justifyContent: "center"
            }}
          >
            <View style={styles.container}>
              <Image source={require("./assets/mascot.png")}></Image>
              <Text style={styles.winMessage}>Congratulations!! You Won.</Text>
              <Button
                onPress={() => {
                  this.showAllItem();
                }}
                full
                success
                style={styles.btn}
              >
                <Text style={styles.btnText}>Show All Coupons</Text>
              </Button>
              <Button
                onPress={() => {
                  this.resetGame();
                }}
                full
                danger
                style={styles.btn}
              >
                <Text style={styles.btnText}>Reset Game</Text>
              </Button>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  grid: {},
  itemRow: {
    flexDirection: "row"
  },
  item: {
    minWidth: 70,
    padding: 10,
    borderWidth: 2,
    borderColor: "#000",
    alignItems: "center"
  },
  btn: {
    marginVertical: 15
  },
  btnText: {
    color: "#fff",
    fontSize: 18
  },
  topBar: {
    backgroundColor: "#8B78E6",
    justifyContent: "center",
    width: Dimensions.get("window").width,
    height: 50,
    marginVertical: 20
  },
  topText: {
    color: "#fff",
    textAlign: "center"
  },
  winMessage: {
    fontSize: 25,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    color: "purple",
    textAlign: "center"
  }
});
