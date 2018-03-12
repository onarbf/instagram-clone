export default {
  Query: {
    getUsers: (parent, args, {models}, info)=> models.User.find(),
    getUser: (parent,args,{models}, info)=> models.User.findOne(args)
  },
  Mutation: {
    createUser: (parent, args, {models})=> models.User.create(args)
  }
}
