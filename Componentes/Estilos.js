import { StyleSheet } from "react-native";

export const styles0 = StyleSheet.create({
  icon: {
    marginBottom: 6,
  },
  eyeIcon: {
    position: 'absolute',
    right: 40,
    top: 323
  },
  eyeIcon2: {
    position: 'absolute',
    left: 75,
    bottom: 13
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textShadowColor: 'rgba(255, 230, 0, 0.5)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginBottom: 10,
    color: '#004883fe',
  },
  titulo: {
    fontSize: 60,
    textAlign: 'center',
    marginBottom: 20,
    color: '#004883fe',
    fontWeight: 'bold',
    textShadowColor: 'rgba(255, 230, 0, 0.5)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: 'black',
  },
  vista: {
    position: 'absolute',
    top: 22,
    left: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container2: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eae9e9d5',
    width: 280,
    height: 550,
    borderRadius: 10,
    opacity: 0.9,
    borderWidth: 1,
    borderColor: '#8b8a8a',
  },

  scrollViewContent: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  scrollContentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  label: {
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#474747',
    marginTop: 10
  },
  link: {
    color: 'blue',
    marginTop: 15,
    textDecorationLine: 'underline',
  },
  inputContainer: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 5,
    width: '80%',
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  //estilos de la bienvenida 
  centeredContent: {
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 100
  },
  //Logo de la bienbenida
  logo2: {
    width: 300,
    height: 300,
  },
  Button: {
    backgroundColor: '#c6ffa0',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'black',
    marginTop: 10,
    shadowColor: 'black',
    elevation: 8,
  },
  Button2: {
    backgroundColor: '#c6ffa0',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'black',
    marginTop: 10,
    shadowColor: 'black',
    elevation: 5,
  },
  textoBoton: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
  textoBoton2: {
    fontSize: 19,
    textAlign: 'center',
    color: '#474747',
    fontWeight: 'bold',
  },
  //estilos del select
  buttonStyle: {
    width: 250,
    height: 40,
    backgroundColor: '#ccc',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15
  },
  buttonTextStyle: {
    color: '#000',
    textAlign: 'center',
  },
  dropdownStyle: {
    width: '70%',
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  rowStyle: {
    backgroundColor: '#fff',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  rowTextStyle: {
    color: '#000',
    textAlign: 'center',
    paddingVertical: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  checkboxLabel: {
    marginLeft: 5,
    fontSize: 14,
  },
  //Aqui empiea los estilos de home
  container4: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 10,
    alignItems: 'center',
    alignContent: 'center',
    marginLeft: 5
  },
  container5: {
    alignItems: 'center',
    backgroundColor: '#c6ffa0',
    paddingHorizontal: 10,
    justifyContent: 'center',
    position: 'absolute',
    top: 390,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    opacity: 0.8,
    elevation: 10
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    bottom: 493
  },
  //estilos de recuperacion de contraseña
  containerrec: {
    backgroundColor: '#c6ffa0',
    width: 200,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 15,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15
  },
  containerrecUnselected: {
    backgroundColor: '#fff',
    width: 200,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 15,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15


  },

});

export const productostyles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },
  card: {
  },
  imageContainer: {
    alignItems: 'center', // Centra horizontalmente
  },
  image: {
    height: 400,
    width: '100%',
  },
});

export const preguntasFstyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textShadowColor: 'rgba(255, 230, 0, 0.5)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginBottom: 20,
    color: '#004883fe',
  },
  faqItem: {
    marginBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    borderColor: 'black',
    borderWidth: 1
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
  },
  answer: {
    fontSize: 16,
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 8,
  },
});

export const contactostyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10
  },
  container2: {
    padding: 15,
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: '#f0f0f0',
    opacity: 0.8,
    width: 340,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textShadowColor: 'rgba(255, 230, 0, 0.5)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginBottom: 5,
    color: '#004883fe',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 15,
    color: 'black',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    backgroundColor: '#fff'
  },
  inputCom: {
    flex: 1,
    height: 120,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    textAlignVertical: 'top',
    backgroundColor: '#fff'
  },
  button: {
    backgroundColor: '#c6ffa0',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'black',
    shadowColor: 'black',
    elevation: 8,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  contactLinksContainer: {
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: '#f0f0f0',
    opacity: 0.8,
    width: 340,
  },
  contactLink: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  contactIcon: {
    fontSize: 24,
    marginRight: 10,
  },
  contactText: {
    fontSize: 20,
    color: '#333',
  },
});

export const Quienesstyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 10,
    alignItems: 'center',
    alignContent: 'center',
    marginLeft: 5,

  },
  container2: {
    alignItems: 'center',
    backgroundColor: '#c6ffa0',
    paddingHorizontal: 5,
    justifyContent: 'center', // Centra verticalmente
    borderColor: 'black0',
    borderWidth: 1,
    borderRadius: 10,
    opacity: 0.8,
    elevation: 10
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textShadowColor: 'rgba(255, 230, 0, 0.5)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginBottom: 5,
    color: '#004883fe',
  },
  image: {
    borderRadius: 8,
    alignContent: 'center',
    alignItems: 'center'
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
  },
  item: {
    alignItems: 'center',
  },
  itemImage: {
    width: 290,
    height: 290,
    borderRadius: 8,
    alignContent: 'center',
    alignItems: 'center',
    marginLeft: 13,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    top: -15
  },
  paginationDot: {
    width: 9,
    height: 9,
    borderRadius: 4,
    backgroundColor: '#fff',
    marginHorizontal: 5,
  },
  paginationDotActive: {
    backgroundColor: 'blue',
  },
});

export const Politicasstyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textShadowColor: 'rgba(255, 230, 0, 0.5)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginBottom: 5,
    color: '#004883fe',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  policyContainer: {
    padding: 12,
    borderRadius: 8,
    borderColor: 'black',
    marginTop: 15,
    shadowColor: 'black',
    elevation: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    borderColor: 'black',
    borderWidth: 1
  },
  policyText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',

  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalTittle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
  },
  modalText: {
    fontSize: 15,
    textAlign: 'justify',
    color: '#555',
  },
  button: {
    backgroundColor: '#c6ffafe0',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'black',
    marginTop: 10,
    shadowColor: 'black',
    elevation: 8,

  },
  buttonClose: {
    backgroundColor: '#c6ffafe0',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    marginTop: 10
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export const Acercadestyles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: 'green',
  },
  container: {
    flex: 1,
    padding: 16,
  },
  centeredContent: {
    alignItems: 'center',
  },
  logo: {
    width: 250,
    height: 250,
    borderRadius: 75,
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: 'white',
  },
  ctaButton: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  ctaText: {
    color: 'white',
    fontSize: 16,
  },
})

export const ProductoCardStyles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },
  card: {
    margin: 10,
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'cover',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 77
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 250
  },
  animationContainer: {
    width: 500,
    height: 500,
    alignItems: 'center',
    justifyContent: 'center',
  },
  animation: {
    width: '100%',
    height: '100%',
  },
})

export const tablaProductosStyles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingBottom: 5,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    marginRight: 10,
  },
  columnHeader: {
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingVertical: 8,
  },
  tableCell: {
    flex: 1,
    textAlign: 'center',
  },
  actionCell: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 1,
  },
  container: {
    flexDirection: 'center',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
})

export const catalogoProductos = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  searchInput: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    paddingLeft: 10,
    backgroundColor: '#fff'
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#f0f0f0',
    opacity: 0.8,
  },
  cardImage: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 5,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardCategory: {
    fontSize: 16,
    color: 'black',
    marginBottom: 5,
  },
  cardPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animation: {
    width: 640,
    height: 590,
    position: 'center',
    top: 0,
    left: 0,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    margin: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterButton: {
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  filterButtonText: {
    fontSize: 16,
  },
})

export const dispositivosStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    marginTop: 10
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    borderWidth: 10,
    borderColor: 'yellow',
    paddingVertical: 10,
    paddingHorizontal: 23,
    margin: 6,
    elevation: 5
  },
  apagadoButton: {
    backgroundColor: 'red',
  },
  encendidoButton: {
    backgroundColor: 'green',
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: 'center'
  },

  apagadoImageContainer: {
    borderColor: 'red',
  },
  encendidoImageContainer: {
    borderColor: 'green',
  },
  image: {
    width: 100,
    height: 100,
    flex: 1,
    resizeMode: 'cover',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    marginTop: 10,
  },
  termometro: {
    width: 30,
    height: 190,
    backgroundColor: '#ddd',
    borderRadius: 10,
    position: 'relative',
    overflow: 'hidden',
    marginRight: 20,
    marginTop: 50,
    borderWidth: 3
  },
  termometroFill: {
    backgroundColor: '#f00',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  termometroTop: {
    backgroundColor: '#ddd',
    position: 'absolute',
    top: 0,
    left: -10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  termometroBulbo: {
    width: 44,
    height: 40,
    backgroundColor: '#f00',
    position: 'absolute',
    bottom: -20,
    left: -10,
    borderRadius: 20,
  },
  gauge: {
    width: 180,
    height: 180,
    backgroundColor: '#ddd',
    borderRadius: 100,
    position: 'relative',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 50,
    left: 40,
    borderWidth: 3
  },
  fill: {
    backgroundColor: 'blue',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text2: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    position: 'absolute',
    left: -37,
    textAlign: 'center'
  },
  text3: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  abajoMenu: {
    width: '100%',
    height: 80,
    backgroundColor: 'red',
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  addButton: {
    backgroundColor: 'blue',
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width:'80%'
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 10,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
})