const colorRgb: [number, number, number] = [255, 0, 234];

type HTTPResponse = [number, string];

const goodRes: HTTPResponse = [200, 'ok'];

const response: HTTPResponse[] = [[404, 'Not Found'], [200, 'ok']]

enum OrderStatus{
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED
}

const myStatus = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus) {
  return status === OrderStatus.DELIVERED
}

isDelivered(OrderStatus.RETURNED)


enum ArrowKeys{
  UP = 'up',
  DOWN = 'down',
  LEFT = 'left',
  RIGHT = 'right',
  Error = 324
}
