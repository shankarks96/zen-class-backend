import {QueryParams} from '../@types/query-params';
import {ClassModel} from '../models/class.model';

export class ClassService {
  private readonly classModel = ClassModel;
  public async create(payload: any, user: string) {
    payload.created_by = user;
    const createClass = await this.classModel.create(payload);
    return createClass;
  }

  public async updateById(id: string, payload: any, user: string) {
    payload.updated_by = user;
    const updatedResult = await this.classModel.findByIdAndUpdate(
      id,
      {$set: payload},
      {new: true}
    );
    return updatedResult;
  }

  public async getById(id: string, user: string) {
    const data = await this.classModel.findById(id);
    return data;
  }

  public async findAll(params: QueryParams, user: string) {
    const page = params.page || 1;
    const limit = params.limit || 24;
    const sort = params.sort || '_id|DESC';
    const filters = params.filters || '';
    const textSearch = params.textSearch || '';
    const skip = page * limit - limit;
    const [sortField, sortOrder] = sort.split('|');
    const filterAry = filters.split(',');
    const queryObj: any = {};
    for (const element of filterAry) {
      const filterVal = element;
      const [search_field, search_value] = filterVal.split('|');
      queryObj[search_field] = search_value;
    }
    if (textSearch) {
      queryObj['$or'] = [{name: new RegExp(textSearch, 'i')}];
    }
    const data = await this.classModel
      .find(queryObj, {
        name: 1,
        session: 1,
        students: 1,
        teacher: 1,
      })
      .limit(limit)
      .skip(skip)
      .sort({[sortField]: sortOrder === 'DESC' ? -1 : 1});
    const totalCount = await this.classModel.countDocuments(queryObj);
    return {data, totalCount};
  }
}
