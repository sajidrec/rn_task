import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#135',
    paddingHorizontal: 16,
    paddingTop: 12,
  },

  listContent: {
    paddingBottom: 20,
  },

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 15,
    marginBottom: 12,

    elevation: 4, // Android

    shadowColor: '#000', // iOS
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },

  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: '#20757e',
  },

  info: {
    flex: 1,
    marginLeft: 15,
  },

  name: {
    fontSize: 18,
    fontWeight: '700',
    color: '#222',
  },

  designation: {
    fontSize: 14,
    color: '#20757e',
    fontWeight: '600',
    marginTop: 2,
    marginBottom: 8,
  },

  text: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
});